# DESIGN GUIDE - GRUPO IHI
**Guía de Diseño y Estándares Visuales**

---

## 📦 TECH STACK

```
✅ Next.js 15          → Framework, SEO, páginas rápidas
✅ TypeScript          → Código seguro, menos errores
✅ Tailwind CSS        → Estilos rápidos y responsive
✅ ShadCN/UI           → Componentes pre-hechos
✅ Framer Motion       → Animaciones modernas
✅ Cloudinary          → Optimización de imágenes
✅ Vercel Analytics    → Métricas de visitas
✅ Ultramsg            → Notificaciones WhatsApp
✅ React Hook Form     → Validación de formularios
✅ Vercel              → Hosting y deploy
```

---

## 🎨 PALETA DE COLORES

### Colores Primarios (Azules)
```css
--sky-light:    #7BC0C0   /* Sky 300 - Acentos suaves */
--sky-medium:   #4499D1   /* Sky 500 - Elementos interactivos */
--blue-primary: #1926C2   /* Blue 700 - Principal/CTA */
--blue-dark:    #15067B   /* Blue 900 - Títulos importantes */
--navy:         #090E52   /* Navy 950 - Texto principal */
```

### Colores Neutros
```css
--white:        #FFFFFF   /* Fondos principales */
--gray-50:      #F9FAFB   /* Fondos alternos */
--gray-100:     #F3F4F6   /* Bordes suaves */
--gray-200:     #E5E7EB   /* Divisores */
--gray-400:     #9CA3AF   /* Texto secundario */
--gray-600:     #4B5563   /* Texto terciario */
--gray-900:     #111827   /* Texto oscuro */
--black:        #000000   /* Máximo contraste */
```

### Colores Funcionales
```css
--success:      #10B981   /* Verde - Éxito */
--warning:      #F59E0B   /* Ámbar - Advertencia */
--error:        #EF4444   /* Rojo - Error */
--info:         #3B82F6   /* Azul - Información */
```

### Uso de Colores
- **Fondos principales**: `--white`, `--gray-50`
- **CTAs primarios**: `--blue-primary`
- **CTAs secundarios**: `--sky-medium`
- **Títulos principales**: `--navy`, `--blue-dark`
- **Texto cuerpo**: `--gray-900`, `--gray-600`
- **Links/Hover**: `--blue-primary` → `--blue-dark`
- **Acentos**: `--sky-light`, `--sky-medium`

---

## 📝 TIPOGRAFÍA

### Fonts
```css
font-family: 'Inter', sans-serif;        /* Texto, UI */
font-family: 'Manrope', sans-serif;      /* Títulos, Display */
```

### Importar en layout
```tsx
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
```

### Escala Tipográfica (Type Scale 1.250 - Major Third)

| Elemento | Font | Size | Line Height | Weight | Tailwind |
|----------|------|------|-------------|--------|----------|
| **Display XL** | Manrope | 60px | 72px | 800 | `text-6xl font-extrabold` |
| **Display L** | Manrope | 48px | 56px | 800 | `text-5xl font-extrabold` |
| **H1** | Manrope | 38px | 46px | 700 | `text-4xl font-bold` |
| **H2** | Manrope | 30px | 38px | 700 | `text-3xl font-bold` |
| **H3** | Manrope | 24px | 32px | 600 | `text-2xl font-semibold` |
| **H4** | Manrope | 20px | 28px | 600 | `text-xl font-semibold` |
| **Body Large** | Inter | 18px | 28px | 400 | `text-lg` |
| **Body** | Inter | 16px | 24px | 400 | `text-base` |
| **Body Small** | Inter | 14px | 20px | 400 | `text-sm` |
| **Caption** | Inter | 12px | 16px | 400 | `text-xs` |
| **Label** | Inter | 14px | 20px | 600 | `text-sm font-semibold` |

### Uso Recomendado
- **Títulos grandes (Hero)**: Display XL/L en Manrope
- **Títulos secciones**: H2/H3 en Manrope
- **Subtítulos**: H4 en Manrope
- **Párrafos principales**: Body en Inter
- **Descripciones**: Body Small en Inter
- **Botones**: Label (14px semibold) en Inter
- **Meta info**: Caption en Inter

---

## 🎯 COMPONENTES BASE

### Botones

#### Primario (CTA Principal)
```tsx
className="
  px-6 py-3 
  bg-blue-700 hover:bg-blue-900 
  text-white font-semibold text-sm
  rounded-lg
  transition-all duration-200
  shadow-lg hover:shadow-xl
  hover:scale-105
"
```

#### Secundario
```tsx
className="
  px-6 py-3
  bg-white hover:bg-gray-50
  text-blue-700 font-semibold text-sm
  border-2 border-blue-700 hover:border-blue-900
  rounded-lg
  transition-all duration-200
"
```

#### Ghost
```tsx
className="
  px-6 py-3
  bg-transparent hover:bg-gray-100
  text-gray-900 font-semibold text-sm
  rounded-lg
  transition-all duration-200
"
```

### Tamaños de Botones
- **Large**: `px-8 py-4 text-base`
- **Medium**: `px-6 py-3 text-sm` (default)
- **Small**: `px-4 py-2 text-xs`

---

## 📐 SPACING & LAYOUT

### Sistema de Espaciado (Tailwind Scale)
```
4px   → spacing-1  → gap-1, p-1, m-1
8px   → spacing-2  → gap-2, p-2, m-2
12px  → spacing-3  → gap-3, p-3, m-3
16px  → spacing-4  → gap-4, p-4, m-4
24px  → spacing-6  → gap-6, p-6, m-6
32px  → spacing-8  → gap-8, p-8, m-8
48px  → spacing-12 → gap-12, p-12, m-12
64px  → spacing-16 → gap-16, p-16, m-16
96px  → spacing-24 → gap-24, p-24, m-24
128px → spacing-32 → gap-32, p-32, m-32
```

### Reglas de Espaciado
- **Entre secciones grandes**: `py-24` o `py-32`
- **Entre secciones medianas**: `py-16`
- **Entre elementos dentro de sección**: `gap-8` o `gap-12`
- **Entre elementos relacionados**: `gap-4` o `gap-6`
- **Padding de cards**: `p-6` o `p-8`
- **Margin de texto**: `mb-4` (párrafos), `mb-6` (títulos)

### Grid System
```tsx
// Container principal
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Grid de 2 columnas
className="grid grid-cols-1 md:grid-cols-2 gap-8"

// Grid de 3 columnas
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Grid de 4 columnas
className="grid grid-cols-2 md:grid-cols-4 gap-4"
```

### Breakpoints
```
sm: 640px   → Tablets pequeñas
md: 768px   → Tablets
lg: 1024px  → Laptops
xl: 1280px  → Desktops
2xl: 1536px → Large screens
```

---

## 🎨 ELEMENTOS UI

### Cards
```tsx
className="
  bg-white rounded-xl
  border border-gray-200
  p-6 md:p-8
  shadow-sm hover:shadow-md
  transition-all duration-300
  hover:scale-[1.02]
"
```

### Inputs
```tsx
className="
  w-full px-4 py-3
  border border-gray-300 focus:border-blue-700
  rounded-lg
  text-base text-gray-900
  placeholder:text-gray-400
  focus:outline-none focus:ring-2 focus:ring-blue-700/20
  transition-all duration-200
"
```

### Shadows
```css
shadow-sm     → Sutil (cards)
shadow-md     → Hover states
shadow-lg     → Botones importantes
shadow-xl     → Modals, destacados
shadow-2xl    → Hero elements
```

### Border Radius
```css
rounded-sm    → 2px  (tags pequeños)
rounded       → 4px  (elementos pequeños)
rounded-md    → 6px  (inputs)
rounded-lg    → 8px  (botones, cards)
rounded-xl    → 12px (cards grandes)
rounded-2xl   → 16px (secciones)
rounded-3xl   → 24px (elementos hero)
rounded-full  → 9999px (avatares, pills)
```

---

## 🎬 ANIMACIONES (Framer Motion)

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Fade In con Delay (Stagger)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
```

### Scroll Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

---

## 📱 PÁGINA "UNDER MAINTENANCE"

### Layout
```tsx
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 
                flex items-center justify-center px-4">
  
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
  >
    
    {/* Logo */}
    <div className="mb-8">
      <div className="w-20 h-20 bg-blue-700 rounded-2xl mx-auto 
                      flex items-center justify-center">
        <span className="text-white font-bold text-2xl font-manrope">IHI</span>
      </div>
    </div>

    {/* Título */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-navy 
                   mb-4 font-manrope">
      Estamos en Mantenimiento
    </h1>

    {/* Descripción */}
    <p className="text-lg text-gray-600 mb-8 font-inter max-w-xl mx-auto">
      Estamos mejorando nuestra plataforma para ofrecerte una mejor experiencia. 
      Estaremos de vuelta muy pronto.
    </p>

    {/* Ilustración */}
    <div className="mb-8 relative h-64">
      {/* Aquí va ilustración SVG o imagen */}
      <Image 
        src="/maintenance-illustration.svg" 
        alt="En mantenimiento"
        fill
        className="object-contain"
      />
    </div>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="mailto:contacto@grupoihi.com"
        className="px-8 py-4 bg-blue-700 hover:bg-blue-900 
                   text-white font-semibold rounded-lg
                   transition-all duration-200 shadow-lg hover:shadow-xl
                   hover:scale-105"
      >
        Contáctanos por Email
      </a>
      
      <a 
        href="https://wa.me/523312345678"
        className="px-8 py-4 bg-white hover:bg-gray-50 
                   text-blue-700 font-semibold border-2 border-blue-700
                   rounded-lg transition-all duration-200"
      >
        WhatsApp
      </a>
    </div>

    {/* Footer */}
    <p className="text-sm text-gray-400 mt-8 font-inter">
      © 2025 Grupo IHI. Todos los derechos reservados.
    </p>
    
  </motion.div>
</div>
```

---

## 🎨 VARIABLES CSS PERSONALIZADAS (opcional)

Si quieres usar CSS variables además de Tailwind:

```css
/* globals.css */
:root {
  /* Colores */
  --color-sky-light: #7BC0C0;
  --color-sky-medium: #4499D1;
  --color-blue-primary: #1926C2;
  --color-blue-dark: #15067B;
  --color-navy: #090E52;
  
  /* Spacing */
  --spacing-section: 6rem;
  --spacing-element: 2rem;
  
  /* Border radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;
}
```

---

## 📋 CHECKLIST DE DISEÑO

Antes de considerar una página "terminada", verifica:

### ✅ Responsive
- [ ] Se ve bien en mobile (375px)
- [ ] Se ve bien en tablet (768px)
- [ ] Se ve bien en desktop (1440px)
- [ ] No hay scroll horizontal
- [ ] Imágenes no se deforman

### ✅ Tipografía
- [ ] Tamaños correctos según escala
- [ ] Line-heights legibles
- [ ] Contraste adecuado (mínimo 4.5:1)
- [ ] Fonts cargando correctamente

### ✅ Espaciado
- [ ] Consistente en toda la página
- [ ] Respira bien (no apretado)
- [ ] Sigue el sistema de spacing

### ✅ Interactividad
- [ ] Todos los botones tienen hover
- [ ] Links cambian al hover
- [ ] Transiciones suaves (200-300ms)
- [ ] Focus states visibles

### ✅ Accesibilidad
- [ ] Alt text en todas las imágenes
- [ ] Botones con aria-labels si necesario
- [ ] Contraste de colores cumple WCAG AA
- [ ] Navegable con teclado

### ✅ Performance
- [ ] Imágenes optimizadas (WebP)
- [ ] Lazy loading en imágenes
- [ ] Animaciones con GPU (transform, opacity)
- [ ] Bundle size razonable

---

## 🚀 PRÓXIMOS PASOS

1. **Crear página Under Maintenance** usando este guide
2. **Definir componentes reutilizables** (Button, Card, Input)
3. **Crear biblioteca de componentes** con Storybook (opcional)
4. **Documentar variantes** de cada componente
5. **Mantener consistencia** en todo el sitio

---

**Última actualización**: Octubre 2025  
**Versión**: 1.0