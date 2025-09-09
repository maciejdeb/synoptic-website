# 🐙 GitHub Setup Guide for Synoptic Website

## 🎯 Quick Start

This guide walks you through setting up your Synoptic website on GitHub for seamless integration with Cloudflare Pages.

---

## 📋 Prerequisites

- GitHub account (free): https://github.com/join
- Git installed on your computer (optional): https://git-scm.com/
- The deployment package files (this folder)

---

## 🚀 Method 1: Web Interface (Easiest)

### Step 1: Create Repository

1. **Go to GitHub**
   - Visit https://github.com/new
   - Log in to your account

2. **Repository Settings**
   ```
   Repository name: synoptic-website
   Description: Professional IT services website for Synoptic
   Visibility: ✅ Public (required for free Cloudflare Pages)
   
   ❌ Do NOT check "Add a README file"
   ❌ Do NOT add .gitignore
   ❌ Do NOT choose a license
   ```

3. **Click "Create repository"**

### Step 2: Upload Files

1. **Upload via Web Interface**
   - On your new repository page, click "uploading an existing file"
   - Drag and drop ALL files from `synoptic-final-deployment` folder
   - Or click "choose your files" and select all files

2. **Commit Changes**
   ```
   Commit message: Initial commit - Synoptic professional website
   Description: Complete website with bilingual support, certifications, and IT theme
   ```
   - Click "Commit changes"

---

## 🚀 Method 2: Git CLI (Advanced)

### Step 1: Create Repository
- Follow Step 1 from Method 1 above

### Step 2: Upload via Git

```bash
# Navigate to your project folder
cd synoptic-final-deployment

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Synoptic professional website"

# Add GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/synoptic-website.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## ✅ Verification

After upload, your repository should contain:

### 📁 Root Directory
```
synoptic-website/
├── 📄 README.md
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
├── 📄 index.html
├── 📁 src/
├── 📁 public/
├── 📁 dist/
└── 📄 DEPLOYMENT_GUIDE.md
```

### 📁 Key Folders
- `src/` - Source code
- `public/` - Static assets
- `dist/` - Built files (ready for deployment)

---

## 🔗 Next Steps

Once your repository is set up:

1. **✅ Repository URL**: Your repo is available at:
   `https://github.com/YOUR_USERNAME/synoptic-website`

2. **🚀 Deploy to Cloudflare**: Follow the Cloudflare setup guide

3. **🔄 Auto-Deployment**: Any future changes pushed to GitHub will automatically deploy to Cloudflare Pages

---

## 🛠️ Repository Management

### Making Updates

**Via Web Interface:**
1. Navigate to the file you want to edit
2. Click the pencil (✏️) icon
3. Make your changes
4. Commit changes with descriptive message

**Via Git CLI:**
```bash
# Make your changes locally
# Then:
git add .
git commit -m "Update: Description of your changes"
git push
```

### Branch Protection (Optional)

For additional safety:
1. Go to repository Settings
2. Click "Branches" 
3. Add rule for `main` branch
4. Enable "Restrict pushes that create files larger than 100MB"

---

## 📊 Repository Settings

### Recommended Settings

1. **General Settings**
   - ✅ Issues: Enabled
   - ✅ Wiki: Enabled
   - ✅ Projects: Disabled (unless needed)

2. **Pages Settings** (if using GitHub Pages instead of Cloudflare)
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /dist

---

## 🚨 Troubleshooting

### Upload Issues

**Large File Error:**
- GitHub has 100MB file limit
- Check for large files in dist folder
- Solution: Remove `node_modules` if present

**Permission Denied:**
- Ensure repository is public
- Check your GitHub account permissions

**Files Missing:**
- Ensure you uploaded the entire `synoptic-final-deployment` contents
- Check that hidden files (.gitignore, etc.) are included

### Git Issues

**Authentication Failed:**
```bash
# Use personal access token instead of password
# Generate at: https://github.com/settings/tokens
```

**Remote Already Exists:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/synoptic-website.git
```

---

## 🔐 Security Best Practices

1. **Public Repository**: Safe for static websites (no sensitive data)
2. **API Keys**: Never commit API keys or secrets
3. **Regular Updates**: Keep dependencies updated
4. **Access Control**: Use teams for collaborative projects

---

**✅ Your GitHub repository is now ready for Cloudflare Pages deployment!**

*Continue with the Cloudflare deployment guide to complete your setup.*

---

*Last updated: September 9, 2025*