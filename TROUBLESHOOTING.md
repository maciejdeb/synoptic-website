# 🚨 Quick Troubleshooting Guide

*Solve common deployment issues quickly*

---

## 🚑 Emergency Quick Fixes

### ❌ Build Fails on Cloudflare

**Symptom**: Red X on deployment, "Build failed with exit code 1"

**Quick Fix**:
1. Go to Cloudflare Pages → Settings → Environment variables
2. Add: `NODE_VERSION` = `18`
3. Change build command to: `npm install && npm run build`
4. Retry deployment

**Alternative**:
- Use the pre-built files from `/dist` folder
- Upload directly to any static hosting service

---

### ❌ "Command not found: pnpm"

**Quick Fix**: Change build command in Cloudflare Pages
```
OLD: pnpm build
NEW: npm install && npm run build
```

---

### ❌ Images Not Loading

**Symptoms**: Broken image icons, missing logos/certificates

**Quick Fix**: Check image paths in components
```typescript
✅ CORRECT:
<img src="/images/logos/synoptic_logo.png" />

❌ WRONG:
<img src="../images/logos/synoptic_logo.png" />
<img src="./images/logos/synoptic_logo.png" />
```

**Root Cause**: All images must use absolute paths starting with `/`

---

### ❌ Page Refresh Shows 404

**Symptom**: Direct URLs work, but refreshing page shows 404

**Quick Fix**: Add file `public/_redirects` with content:
```
/*    /index.html   200
```

**Why**: Single Page Applications need this for routing

---

### ❌ Language Switching Broken

**Symptoms**: Clicking language buttons does nothing

**Quick Check**:
1. Open browser console (F12)
2. Look for JavaScript errors
3. Check if `LanguageContext` is properly imported

**Quick Fix**: Verify all language files are uploaded:
- `src/contexts/LanguageContext.tsx`
- `src/lib/translations.ts`

---

### ❌ Website Loads But Looks Broken

**Symptoms**: No styling, plain HTML appearance

**Quick Fixes**:
1. **CSS not loading**: Check if `dist/assets/*.css` files exist
2. **TailwindCSS issue**: Verify `tailwind.config.js` is uploaded
3. **Build incomplete**: Run local build and re-upload `dist/` folder

---

## 🛠️ Developer Issues

### ❌ Local Development Not Working

**Symptom**: `pnpm dev` fails or `npm start` doesn't work

**Quick Fix**:
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json pnpm-lock.yaml
pnpm install
# or: npm install

pnpm dev
# or: npm run dev
```

### ❌ TypeScript Errors

**Quick Check**:
```bash
npx tsc --noEmit
```

**Common Fixes**:
- Ensure all `.ts` and `.tsx` files are uploaded
- Check `tsconfig.json` is present
- Verify all imports have correct file extensions

---

## 🐙 GitHub Issues

### ❌ Can't Upload Files

**File too large error**:
- Remove `node_modules/` folder if present
- GitHub has 100MB file limit per file

**Permission denied**:
- Ensure repository is Public
- Check GitHub login status

**Files missing after upload**:
- Refresh GitHub page
- Check if upload completed fully
- Re-upload missing files individually

---

## ☁️ Cloudflare-Specific Issues

### ❌ "Failed to fetch from origin"

**Quick Fix**:
1. Go to Cloudflare Pages → Settings
2. Under "Build and deployments" → Retry deployment
3. Check GitHub repository is accessible

### ❌ Build Takes Too Long

**Quick Fix**: Use pre-built files
1. Download `/dist` folder contents
2. Create new Pages project
3. Choose "Upload assets" instead of "Connect to Git"
4. Upload `dist/` folder contents

### ❌ Custom Domain Not Working

**24-hour rule**: DNS changes take up to 24 hours

**Quick Check**:
```bash
# Check DNS propagation
nslookup your-domain.com
# Should point to Cloudflare
```

---

## 📱 Mobile Issues

### ❌ Website Broken on Mobile

**Quick Checks**:
1. Test on actual device, not just browser dev tools
2. Check if images are too large (slow loading)
3. Verify touch interactions work

**Quick Fix**: Check viewport meta tag in `index.html`
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## ⚡ Performance Issues

### ❌ Website Loads Slowly

**Quick Diagnostics**:
1. Open browser Network tab (F12 → Network)
2. Refresh page
3. Look for large files (>1MB)

**Quick Fixes**:
1. **Large images**: Compress images before upload
2. **Many requests**: Check if all files are necessary
3. **JavaScript errors**: Check browser console

**Cloudflare Optimizations** (Free):
1. Go to Speed → Optimization
2. Enable "Auto Minify" for CSS and JavaScript
3. Enable "Brotli" compression

---

## 🔍 Diagnostic Commands

### Check Local Build
```bash
cd synoptic-final-deployment
pnpm install
pnpm build
# Should complete without errors
```

### Check File Structure
```bash
ls -la dist/
# Should show: index.html, assets/, images/
```

### Test Local Preview
```bash
pnpm preview
# Should open browser with working site
```

### Check Dependencies
```bash
npm audit
# Shows any security issues
```

---

## 📞 When All Else Fails

### 🔄 Nuclear Option: Complete Reset

1. **Delete and recreate** GitHub repository
2. **Re-upload** all files from deployment package
3. **Delete and recreate** Cloudflare Pages project
4. **Follow guides** step-by-step from beginning

### 🆘 Alternative Hosting

If Cloudflare continues to have issues:

**Netlify** (similar to Cloudflare):
1. Go to netlify.com
2. Drag and drop `dist/` folder
3. Site is live instantly

**Vercel** (from Vite creators):
1. Import GitHub repository
2. Auto-detects Vite settings
3. Deploys automatically

**GitHub Pages** (free with GitHub):
1. Repository Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: /dist

---

## 🕵️ Investigation Tools

### Browser Console (F12)
- **Red errors**: JavaScript issues
- **Yellow warnings**: Non-critical issues
- **Network tab**: See which files fail to load

### Cloudflare Build Logs
1. Go to project → Deployments
2. Click on failed deployment
3. View detailed error logs

### GitHub Repository Check
- Ensure all folders have files
- Check file sizes (none > 25MB)
- Verify repository is Public

---

**☎️ Remember**: Most issues are configuration problems, not code problems. Double-check all settings match the guides exactly.

---

*Last updated: September 9, 2025*