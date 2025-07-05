# Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `portfolio`
5. Make it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Push Your Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace 'yourusername' with your actual GitHub username)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Update Configuration

1. **Update package.json homepage**:
   Replace `yourusername` with your actual GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. **Update personal information**:
   - Replace placeholder content in all components
   - Update social media links
   - Add your actual resume PDF to `public/resume.pdf`
   - Set up Formspree integration

## Step 4: Deploy to GitHub Pages

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

## Step 6: Access Your Website

Your portfolio will be available at:
`https://yourusername.github.io/portfolio`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name matches exactly in the homepage URL
2. **Build Errors**: Check that all dependencies are installed and the build completes successfully
3. **Styling Issues**: Ensure Tailwind CSS is properly configured

### Alternative Deployment Options

If you prefer other hosting platforms:

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## Custom Domain (Optional)

To use a custom domain:

1. Purchase a domain from a domain registrar
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS settings with your domain provider
4. Update the homepage URL in `package.json`

## Maintenance

- Update content regularly
- Keep dependencies up to date
- Monitor for any build errors
- Test the website on different devices and browsers

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all configuration files are correct
3. Ensure all dependencies are properly installed
4. Check GitHub Pages documentation for troubleshooting 