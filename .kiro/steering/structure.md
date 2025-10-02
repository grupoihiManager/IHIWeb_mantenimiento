# Project Structure - Grupo IHI

## File Organization
This is a Next.js 15 project following standard conventions with TypeScript and Tailwind CSS.

## Expected Directory Structure
```
/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with font imports
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # ShadCN/UI components
│   └── shared/           # Custom shared components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
│   ├── images/          # Optimized images
│   └── icons/           # SVG icons and favicons
├── styles/              # Additional CSS files (if needed)
└── types/               # TypeScript type definitions
```

## Component Organization
- **Base Components**: Button, Input, Card variations in `/components/ui/`
- **Layout Components**: Header, Footer, Navigation in `/components/shared/`
- **Page Components**: Specific page sections in `/components/[page-name]/`

## Naming Conventions
- **Files**: kebab-case for files (`maintenance-page.tsx`)
- **Components**: PascalCase (`MaintenancePage`)
- **Variables**: camelCase (`primaryColor`)
- **CSS Classes**: Follow Tailwind utility classes

## Asset Management
- **Images**: Store in `/public/images/` with descriptive names
- **Icons**: SVG format in `/public/icons/`
- **Fonts**: Import via Next.js font optimization in layout.tsx

## Styling Approach
- **Primary**: Tailwind utility classes
- **Custom CSS**: Only when Tailwind utilities are insufficient
- **Component Variants**: Use className composition patterns
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Code Organization Principles
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for prop definitions
- Maintain consistent import order: React → Next.js → External → Internal