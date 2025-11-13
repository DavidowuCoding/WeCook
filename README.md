# WeCook Landing Page

A beautiful landing page for WeCook, built with React, TypeScript, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/WeCook.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy when you push to the `main` branch

3. **Update the base path (if needed):**
   - If your repository name is NOT "WeCook", update the `base` path in `vite.config.ts`:
   ```typescript
   base: process.env.GITHUB_PAGES ? '/YOUR_REPO_NAME/' : '/',
   ```

4. **Manual deployment (optional):**
   ```bash
   npm run build:gh-pages
   ```
   Then push the `dist` folder to the `gh-pages` branch if you prefer manual deployment.

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the project when you push to `main`
- Deploy to GitHub Pages
- Your site will be available at: `https://YOUR_USERNAME.github.io/WeCook/`

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
├── src/
│   ├── App.tsx           # Main app component
│   ├── WeCookLanding.tsx # Landing page component
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind CSS imports
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
├── public/
│   └── stock_photos/     # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

