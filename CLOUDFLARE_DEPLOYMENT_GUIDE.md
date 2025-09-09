# ☁️ Cloudflare Pages Deployment Guide

## 🎯 Overview

Deploy your Synoptic website to Cloudflare Pages for:
- ⚡ Lightning-fast global delivery
- 🆓 Free hosting with generous limits
- 🔒 Automatic SSL certificates
- 🔄 Automatic deployments from GitHub
- 🌐 Custom domain support

---

## 📋 Prerequisites

- ✅ GitHub repository with your website code
- ✅ Cloudflare account (free)
- ✅ 5 minutes of time

---

# 🚀 Step-by-Step Deployment

## Step 1: Create Cloudflare Account

1. **Visit Cloudflare**
   - Go to https://dash.cloudflare.com/sign-up
   - Create free account with your email
   - Verify your email address

2. **Access Dashboard**
   - Log in to https://dash.cloudflare.com/
   - You should see the main dashboard

---

## Step 2: Create Pages Project

1. **Navigate to Pages**
   - In the left sidebar, click **"Pages"**
   - Click **"Create a project"**

2. **Connect to Git**
   - Choose **"Connect to Git"**
   - Click **"GitHub"**
   - Authorize Cloudflare to access your GitHub account
   - Grant necessary permissions

3. **Select Repository**
   - Find and select **"synoptic-website"** (or your repository name)
   - Click **"Begin setup"**

---

## Step 3: Configure Build Settings

### 🛠️ Essential Settings

```yaml
Project name: synoptic-website
Production branch: main

Build Settings:
  Framework preset: Vite
  Build command: pnpm build
  Build output directory: dist
  Root directory: (leave empty)

Environment variables:
  NODE_VERSION = 18
```

### 📝 Detailed Configuration

1. **Project Name**
   - Enter: `synoptic-website`
   - This will be your subdomain: `synoptic-website.pages.dev`

2. **Production Branch**
   - Select: `main`
   - This is the branch that triggers deployments

3. **Build Settings**
   - **Framework**: Select "Vite" from dropdown
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: Leave empty

4. **Environment Variables**
   - Click "Add variable"
   - Name: `NODE_VERSION`
   - Value: `18`

---

## Step 4: Deploy

1. **Save and Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will start building your site

2. **Monitor Build**
   - Watch the build process in real-time
   - Build typically takes 2-5 minutes
   - ✅ Success: "Your site is live!"
   - ❌ Error: Check troubleshooting section below

3. **Access Your Site**
   - Your site is live at: `https://synoptic-website.pages.dev`
   - Click the link to verify everything works

---

# 🌐 Custom Domain Setup (Optional)

## Step 1: Add Custom Domain

1. **In Cloudflare Pages**
   - Go to your project dashboard
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**

2. **Enter Domain**
   - Enter your domain: `synoptic.pl` (example)
   - Click **"Continue"**

## Step 2: Configure DNS

### Option A: Domain on Cloudflare

If your domain is managed by Cloudflare:
1. DNS records are added automatically
2. SSL certificate is provisioned automatically
3. Your site is live in minutes

### Option B: External Domain

If your domain is managed elsewhere:

1. **Add CNAME Record**
   ```
   Type: CNAME
   Name: www (or @)
   Value: synoptic-website.pages.dev
   ```

2. **Verify Setup**
   - Return to Cloudflare Pages
   - Click "Check DNS"
   - Wait for verification (can take up to 24 hours)

---

# 🔄 Automatic Deployments

## How It Works

✨ **Automatic**: Every push to `main` branch triggers a new deployment

### Deployment Process
1. You push changes to GitHub
2. Cloudflare detects the change
3. New build starts automatically
4. Site updates within minutes

### Monitoring Deployments

1. **View All Deployments**
   - Go to your project in Cloudflare Pages
   - Click "Deployments" tab

2. **Deployment Status**
   - 🟢 **Success**: Deployment completed
   - 🟡 **In Progress**: Currently building
   - 🔴 **Failed**: Check logs for errors

---

# ⚡ Performance Optimization

## Cloudflare Automatic Optimizations

✅ **Already Enabled:**
- Global CDN (300+ locations)
- Automatic image optimization
- Brotli compression
- HTTP/3 support
- Caching optimization

## Optional Enhancements

1. **Speed Settings**
   - Go to Speed → Optimization
   - Enable "Auto Minify" for CSS, JavaScript
   - Enable "Rocket Loader" (test first)

2. **Caching Rules**
   - Set browser cache TTL
   - Configure edge cache TTL

---

# 🚨 Troubleshooting

## Common Build Errors

### ❌ "Command not found: pnpm"

**Solution**: Change build command
```yaml
Build command: npm install && npm run build
```

### ❌ "Build failed with exit code 1"

**Solution**: Check these settings
```yaml
Node version: 18
Build command: pnpm build
Build directory: dist
```

### ❌ TypeScript Errors

**Solution**: Verify all files uploaded
1. Check `tsconfig.json` exists
2. Check `src/` folder is complete
3. Run local build to test: `pnpm build`

### ❌ "Page not found" (404)

**Solution**: SPA routing
1. Add `_redirects` file to `public/` folder:
   ```
   /*    /index.html   200
   ```
2. Redeploy

## Asset Loading Issues

### ❌ Images Not Loading

**Solution**: Check image paths
```typescript
// ✅ Correct (absolute path)
<img src="/images/logo.png" />

// ❌ Incorrect (relative path)
<img src="../images/logo.png" />
```

### ❌ Fonts Not Loading

**Solution**: Verify font files in `public/` folder

## Performance Issues

### 🐌 Slow Loading

**Check**:
1. Build output size (`dist/` folder)
2. Image optimization
3. Unused dependencies

**Solutions**:
1. Compress images
2. Remove unused code
3. Enable Cloudflare optimizations

---

# 📊 Monitoring & Analytics

## Built-in Analytics

1. **Web Analytics** (Free)
   - Go to your domain in Cloudflare
   - Enable "Web Analytics"
   - Add JavaScript snippet to your site

2. **Pages Analytics**
   - Automatic in Cloudflare Pages
   - View in project dashboard
   - Shows deployments, requests, bandwidth

## Advanced Monitoring

- **Real User Monitoring**: Track performance
- **Security Events**: Monitor threats
- **Cache Analytics**: Optimize caching

---

# 🔐 Security Features

## Automatic Security

✅ **Included Free:**
- DDoS protection
- SSL/TLS encryption
- Bot mitigation
- Security headers

## Optional Security

1. **Access Control**
   - IP restrictions
   - Password protection
   - Team access management

2. **WAF (Web Application Firewall)**
   - Available on paid plans
   - Advanced threat protection

---

# 💰 Pricing & Limits

## Free Tier Limits

- ✅ **Bandwidth**: 100GB/month
- ✅ **Requests**: 100,000/day
- ✅ **Build minutes**: 500/month
- ✅ **Sites**: Unlimited
- ✅ **Custom domains**: Unlimited

## Upgrade Benefits

**Pro Plan** ($20/month):
- Unlimited build minutes
- Advanced analytics
- Priority support

---

# ✅ Success Checklist

- [ ] Cloudflare account created
- [ ] GitHub repository connected
- [ ] Build settings configured correctly
- [ ] First deployment successful
- [ ] Website accessible at `.pages.dev` URL
- [ ] All features working (bilingual, animations, etc.)
- [ ] Custom domain configured (if needed)
- [ ] Automatic deployments tested

---

**🎉 Congratulations! Your Synoptic website is now live on Cloudflare Pages!**

**Your website URL**: `https://synoptic-website.pages.dev`

*For ongoing management, bookmark your Cloudflare Pages dashboard.*

---

*Last updated: September 9, 2025*