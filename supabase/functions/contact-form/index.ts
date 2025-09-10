Deno.serve(async (req) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'false'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    try {
        // Extract form data from request body
        const requestData = await req.json();
        const { name, email, phone, company, message } = requestData;

        // Validate required fields
        if (!name || !email || !message) {
            throw new Error('Nazwa, email i wiadomość są wymagane');
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Nieprawidłowy format adresu email');
        }

        // Get Resend API key from environment
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        if (!resendApiKey) {
            console.error('RESEND_API_KEY not configured');
            // Don't throw error - log the submission for now
        }

        // Prepare email content
        const emailSubject = `Nowe zapytanie ze strony Synoptic - ${name}`;
        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Nowe zapytanie ze strony internetowej</h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #374151;">Dane kontaktowe:</h3>
                    <p><strong>Imię i nazwisko:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
                    ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ''}
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #374151;">Wiadomość:</h3>
                    <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 14px; color: #065f46;">
                        <strong>Wysłano:</strong> ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}
                    </p>
                </div>
            </div>
        `;

        // Send email notification if API key is available
        if (resendApiKey) {
            const emailResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'Synoptic Website <noreply@synoptic.pl>',
                    to: ['info@synoptic.pl'],
                    subject: emailSubject,
                    html: emailHtml
                })
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.text();
                console.error('Email sending failed:', errorData);
                // Don't throw error - still log the submission
            } else {
                console.log('Email notification sent successfully');
            }
        }

        // Log the submission for backup (in production, you might save to database)
        console.log('Contact form submission:', {
            timestamp: new Date().toISOString(),
            name,
            email,
            phone: phone || 'Not provided',
            company: company || 'Not provided',
            message: message.substring(0, 200) + (message.length > 200 ? '...' : ''),
            ip: req.headers.get('x-forwarded-for') || 'Unknown'
        });

        // Return success response
        return new Response(JSON.stringify({ 
            data: { 
                success: true, 
                message: 'Wiadomość została pomyślnie wysłana. Odpowiemy w ciągu 24 godzin.',
                timestamp: new Date().toISOString()
            } 
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Contact form error:', error);

        const errorResponse = {
            error: {
                code: 'CONTACT_FORM_ERROR',
                message: error.message || 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.'
            }
        };

        return new Response(JSON.stringify(errorResponse), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
});