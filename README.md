# Miracle Content Studio Website

AI-assisted content creation for businesses in Korea.

## Tech Stack

- React 18
- TypeScript
- React Router 7
- Tailwind CSS v4
- Motion (Framer Motion)
- Vite

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Deployment Options

### Option 1: GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on push to main branch

### Option 2: Vercel (Recommended)

1. Push code to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and deploy
4. Or use the GitHub Action (requires `VERCEL_TOKEN` secret)

### Option 3: Netlify

1. Push code to GitHub
2. Import repository at [netlify.com](https://netlify.com)
3. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

## Project Structure

```
src/
├── app/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── routes.tsx       # Router configuration
│   └── App.tsx          # Root component
├── imports/             # Images and assets
├── styles/              # Global styles
└── main.tsx            # Entry point
```

## Features

- ✅ Multi-page navigation
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Contact form
- ✅ Portfolio gallery
- ✅ Pricing plans
- ✅ FAQ section

## Contact

- Instagram: [@miracletimeee](https://instagram.com/miracletimeee)
- YouTube: [@missmiraclevlog](https://youtube.com/@missmiraclevlog)
