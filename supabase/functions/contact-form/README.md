# Contact Form Edge Function

This edge function handles contact form submissions from the Synoptic website.

## Features

- Validates form data (name, email, message required)
- Sends email notifications using Resend API
- Logs submissions for backup
- Returns proper success/error responses
- Handles CORS for web requests

## Environment Variables Required

- `RESEND_API_KEY`: API key for Resend email service

## Request Format

```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phone": "+48 123 456 789",
  "company": "Example Sp. z o.o.",
  "message": "Interested in AI solutions for our company."
}
```

## Response Format

### Success (200)
```json
{
  "data": {
    "success": true,
    "message": "Wiadomość została pomyślnie wysłana. Odpowiemy w ciągu 24 godzin.",
    "timestamp": "2025-01-10T19:45:00.000Z"
  }
}
```

### Error (400)
```json
{
  "error": {
    "code": "CONTACT_FORM_ERROR",
    "message": "Nazwa, email i wiadomość są wymagane"
  }
}
```

## Deployment

Deploy using the Supabase CLI:

```bash
supabase functions deploy contact-form
```

## Testing

Test the function with:

```bash
curl -X POST https://your-project.supabase.co/functions/v1/contact-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```