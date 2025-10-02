# Grupo IHI - Página de Mantenimiento

Una página de mantenimiento moderna y profesional para Grupo IHI, construida con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Accesibilidad**: Cumple con estándares WCAG AA
- **Performance**: Optimizado para carga rápida
- **SEO Friendly**: Meta tags optimizados
- **Tipografía Profesional**: Inter y Manrope de Google Fonts

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Fuentes**: Inter & Manrope (Google Fonts)

## 🎨 Paleta de Colores

```css
--sky-light: #7BC0C0     /* Acentos suaves */
--sky-medium: #4499D1    /* Elementos interactivos */
--blue-primary: #1926C2  /* CTA principal */
--blue-dark: #15067B     /* Títulos importantes */
--navy: #090E52          /* Texto principal */
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css      # Estilos globales y Tailwind
│   ├── layout.tsx       # Layout principal con fuentes
│   └── page.tsx         # Página de mantenimiento
├── components/
│   └── ui/
│       ├── button.tsx   # Componente de botón reutilizable
│       ├── logo.tsx     # Logo de Grupo IHI
│       └── icons.tsx    # Iconos SVG
├── lib/
│   └── constants.ts     # Constantes del proyecto
└── tailwind.config.ts   # Configuración de Tailwind
```

## 🚀 Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
```

## 📱 Responsive Design

- **Mobile**: 375px+ (diseño vertical, botones apilados)
- **Tablet**: 768px+ (layout adaptado)
- **Desktop**: 1024px+ (diseño centrado, botones lado a lado)

## 🎯 Componentes

### Button
Componente reutilizable con variantes:
- `primary`: Botón principal (azul)
- `secondary`: Botón secundario (borde azul)
- `ghost`: Botón transparente

### Logo
Logo de Grupo IHI con tamaños configurables:
- `sm`: 48px
- `md`: 80px (default)
- `lg`: 112px

## 📞 Información de Contacto

Los datos de contacto se configuran en `lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  email: 'contacto@grupoihi.com',
  whatsapp: {
    number: '523312345678',
    displayNumber: '+52 33 1234 5678',
    url: 'https://wa.me/523312345678'
  }
};
```

## 🎨 Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.ts`:

```typescript
colors: {
  'sky-light': '#7BC0C0',
  'sky-medium': '#4499D1', 
  'blue-primary': '#1926C2',
  'blue-dark': '#15067B',
  'navy': '#090E52',
}
```

### Fuentes
Las fuentes se cargan en `app/layout.tsx`:

```typescript
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Build Estático
```bash
npm run build
npm run start
```

## 📋 Checklist de Calidad

- ✅ Responsive en todos los dispositivos
- ✅ Animaciones suaves (60fps)
- ✅ Contraste WCAG AA (4.5:1)
- ✅ Navegación por teclado
- ✅ Meta tags SEO
- ✅ Performance optimizada
- ✅ Accesibilidad completa

## 📄 Licencia

© 2025 Grupo IHI. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Grupo IHI**