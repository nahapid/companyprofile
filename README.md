# NAHAP — Enterprise Network & Cybersecurity Engineering

This is the repository for the **NAHAP** corporate website, built with [Hugo](https://gohugo.io/) and [HugoBlox](https://hugoblox.com/).

## 🚀 Requirements
- [Hugo Extended](https://gohugo.io/installation/) (v0.120+ recommended)
- [Node.js / npm](https://nodejs.org/) (for Tailwind CSS and dependencies)

## 💻 Local Development
1. Navigate to the site directory:
   ```bash
   cd nahap-site
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Hugo development server:
   ```bash
   hugo server
   ```
4. Open `http://localhost:1313` in your browser.

## 🌐 Deployment & Hosting
This repository is pre-configured with a **GitHub Actions** workflow (`.github/workflows/gh-pages.yml`) to automatically build and deploy the site to **GitHub Pages**.

- **Custom Domain:** `nahap.my.id`
- **Trigger:** Any push to the `main` branch will automatically trigger a rebuild and deploy the latest changes.

### Custom Domain Configuration (CNAME)
The custom domain `nahap.my.id` is statically configured in the file `nahap-site/static/CNAME`. This ensures that every time GitHub Pages is built, the custom domain settings are preserved.

Make sure you have pointed your DNS A/CNAME records on your domain provider to GitHub's servers as per [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
