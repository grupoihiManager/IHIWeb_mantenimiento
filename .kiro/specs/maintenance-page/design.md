# Design Document

## Overview

The maintenance page will be a single, static Next.js page that serves as a professional holding page for Grupo IHI. It will implement the complete design system from the design guide, featuring the blue color palette, Inter/Manrope typography, and smooth Framer Motion animations. The page will be fully responsive and accessible while maintaining the sophisticated, trustworthy brand image.

## Architecture

### Technology Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system classes
- **Animations**: Framer Motion for smooth interactions
- **Fonts**: Inter (body text) and Manrope (headings) via Next.js font optimization
- **Deployment**: Static export suitable for any hosting platform

### Page Structure
The page will be a single route (`/`) with a centered card layout containing:
1. Logo section with IHI branding
2. Main heading and description
3. Illustration/visual element placeholder
4. Contact action buttons (Email & WhatsApp)
5. Footer with copyright information

## Components and Interfaces

### MaintenancePage Component
```tsx
interface MaintenancePageProps {
  // No props needed for static page
}
```

### Logo Component
```tsx
interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

### ContactButton Component
```tsx
interface ContactButtonProps {
  variant: 'primary' | 'secondary'
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}
```

## Data Models

### Contact Information
```tsx
interface ContactInfo {
  email: string
  whatsapp: {
    number: string
    displayNumber: string
  }
}

const contactInfo: ContactInfo = {
  email: 'contacto@grupoihi.com',
  whatsapp: {
    number: '523312345678',
    displayNumber: '+52 33 1234 5678'
  }
}
```

### Brand Colors (Tailwind Custom Classes)
```tsx
// Custom Tailwind configuration will include:
const brandColors = {
  'sky-light': '#7BC0C0',
  'sky-medium': '#4499D1', 
  'blue-primary': '#1926C2',
  'blue-dark': '#15067B',
  'navy': '#090E52'
}
```

## Error Handling

### Graceful Degradation
- **No JavaScript**: Page remains fully functional without animations
- **Slow Connections**: Progressive loading with skeleton states
- **Font Loading Failures**: Fallback to system fonts (sans-serif)
- **Image Loading Issues**: Proper alt text and placeholder handling

### Contact Link Validation
- Email links use `mailto:` protocol with fallback messaging
- WhatsApp links use `https://wa.me/` format with proper number formatting
- Both links include `target="_blank"` and `rel="noopener noreferrer"` for security

## Testing Strategy

### Visual Testing
- **Responsive Breakpoints**: Test at 375px (mobile), 768px (tablet), 1440px (desktop)
- **Browser Compatibility**: Chrome, Firefox, Safari, Edge
- **Font Loading**: Verify Inter and Manrope load correctly with FOUT handling

### Accessibility Testing
- **Keyboard Navigation**: Tab through all interactive elements
- **Screen Reader**: Test with NVDA/JAWS for proper content structure
- **Color Contrast**: Verify all text meets WCAG AA standards (4.5:1 ratio)
- **Focus States**: Ensure visible focus indicators on all buttons

### Performance Testing
- **Lighthouse Score**: Target 95+ for Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: Use Next.js Image component with proper sizing

### Animation Testing
- **Reduced Motion**: Respect `prefers-reduced-motion` user preference
- **Performance**: Ensure animations use GPU-accelerated properties only
- **Timing**: Verify smooth 60fps animations across devices

## Layout Specifications

### Container Structure
```tsx
// Full viewport with gradient background
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
  
  // Centered content card
  <motion.div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
    
    // Logo (80px square, blue-700 background)
    // Heading (text-4xl md:text-5xl, navy color, Manrope font)
    // Description (text-lg, gray-600, Inter font)
    // Illustration placeholder (h-64)
    // Contact buttons (flex layout, responsive stacking)
    // Footer (text-sm, gray-400)
    
  </motion.div>
</div>
```

### Typography Implementation
- **Main Heading**: `font-manrope text-4xl md:text-5xl font-extrabold text-navy`
- **Description**: `font-inter text-lg text-gray-600 max-w-xl mx-auto`
- **Button Labels**: `font-inter font-semibold text-sm`
- **Footer**: `font-inter text-sm text-gray-400`

### Animation Specifications
- **Page Entry**: Fade in with slight upward movement (y: 20px → 0)
- **Duration**: 500ms with easing
- **Button Hovers**: Scale to 1.05 with 200ms transition
- **Shadow Changes**: Smooth shadow transitions on hover states

### Responsive Behavior
- **Mobile (< 640px)**: Single column, full-width buttons, reduced padding
- **Tablet (640px - 1024px)**: Maintain card layout, adjust button sizing
- **Desktop (> 1024px)**: Center card, side-by-side buttons, full spacing

## Brand Compliance

### Color Usage
- **Primary CTA**: `bg-blue-700 hover:bg-blue-900` (Email button)
- **Secondary CTA**: `bg-white border-2 border-blue-700 text-blue-700` (WhatsApp)
- **Background**: Gradient from `gray-50` to `blue-50`
- **Text Hierarchy**: Navy for headings, gray-600 for body, gray-400 for meta

### Visual Elements
- **Logo**: Simple text-based logo "IHI" in white on blue-700 background
- **Shadows**: Subtle `shadow-2xl` for main card, `shadow-lg` for buttons
- **Border Radius**: `rounded-3xl` for main card, `rounded-lg` for buttons
- **Spacing**: Consistent with design guide (mb-8, gap-4, p-8, etc.)