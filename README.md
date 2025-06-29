# Calivio - AI-Powered Sales Calls Assistant

A next-generation SaaS landing page for Calivio, an AI-powered sales calls assistant that revolutionizes sales conversations with real-time guidance, instant objection handling, and predictive deal scoring.

## Features

- **Modern Design**: Glassmorphism UI with dark mode and glowing gradients
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations and microinteractions using Framer Motion
- **Premium Feel**: Futuristic, high-trust design perfect for B2B SaaS
- **Performance**: Built with Next.js 14 and optimized for speed

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout the application

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main page component
├── components/         # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # Process explanation
│   ├── Demo.tsx        # Demo video section
│   ├── Integrations.tsx # Platform integrations
│   ├── Security.tsx    # Security and compliance
│   ├── WhyCalivio.tsx  # Benefits section
│   ├── FAQ.tsx         # Frequently asked questions
│   └── Footer.tsx      # Site footer
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Project dependencies
```

## Customization

The design system is built with Tailwind CSS and includes:

- Custom color palette for brand consistency
- Glassmorphism utilities (`.glass`, `.glass-strong`)
- Gradient text effects (`.gradient-text`)
- Custom animations and transitions
- Responsive breakpoints

## Deployment

The project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
npm start
```

## License

This project is proprietary and confidential. 