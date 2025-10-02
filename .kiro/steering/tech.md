# Tech Stack - Grupo IHI

## Framework & Core
- **Next.js 15**: React framework with SEO optimization and fast page loading
- **TypeScript**: Type-safe development to reduce errors
- **React**: Component-based UI library

## Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **ShadCN/UI**: Pre-built component library
- **Framer Motion**: Animation library for smooth interactions

## External Services
- **Cloudinary**: Image optimization and delivery
- **Vercel Analytics**: Website metrics and performance tracking
- **Ultramsg**: WhatsApp notifications integration
- **React Hook Form**: Form validation and handling

## Deployment
- **Vercel**: Hosting and deployment platform

## Fonts
- **Inter**: Body text and UI elements (`font-inter` variable)
- **Manrope**: Headings and display text (`font-manrope` variable)

## Common Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
vercel --prod        # Deploy to production
```

## Animation Standards
- Use `duration-200` for quick interactions (buttons, hovers)
- Use `duration-300` for card transitions
- Use `duration-500-600` for page/section reveals
- Prefer `transform` and `opacity` for GPU acceleration