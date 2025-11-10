# Rahul Chandra Dey - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase executive IT support, networking expertise, and creative video storytelling.

## 🚀 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Performance Optimized**: Static site generation for blazing-fast load times
- **SEO Friendly**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **Photography Showcase**: Dedicated gallery highlighting Rahul’s published work

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages / Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio/portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Option 1: GitHub Pages (Automated)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository settings on GitHub
3. Navigate to **Settings > Pages**
4. Under "Build and deployment", select **GitHub Actions** as the source
5. The workflow will automatically deploy your site when you push to the `main` branch

Your site will be available at: `https://YOUR_USERNAME.github.io/Portfolio/`

### Option 2: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

Your site will be live in ~2 minutes with automatic deployments on every push!

### Option 3: Manual GitHub Pages Deployment

```bash
npm run deploy
```

Then push the `out` folder to a `gh-pages` branch.

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with intro
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Technical skills
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Experience.tsx   # Work experience
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer component
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Customization

To tailor the portfolio even further:

1. **Personal Info**: Edit the components in `app/components/`
2. **Styling**: Modify `app/globals.css` or component-level Tailwind classes
3. **Case Highlights**: Update the projects array in `app/components/Projects.tsx`
4. **Photography Gallery**: Update image metadata in `app/components/Photography.tsx`
5. **Experience**: Update the experiences array in `app/components/Experience.tsx`
6. **Skills**: Modify the skillCategories in `app/components/Skills.tsx`

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Phone**: +880 1615-747455
- **Email**: rahulchandradey08@gmail.com
- **Location**: Dewan Bazar, Chittagong, Bangladesh

---

Built with dedication by Rahul Chandra Dey
