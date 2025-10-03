import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo IHI - En Mantenimiento",
  description: "Sitio web de Grupo IHI temporalmente en mantenimiento. Estamos mejorando nuestra plataforma para ofrecerte una mejor experiencia. Contáctanos para más información.",
  keywords: "Grupo IHI, mantenimiento, contacto, empresa, servicios",
  authors: [{ name: "Grupo IHI" }],
  robots: "noindex, nofollow",
  openGraph: {
    title: "Grupo IHI - En Mantenimiento",
    description: "Estamos mejorando nuestra plataforma. Estaremos de vuelta muy pronto.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: "/GrupoIHI_Icon.svg",
    shortcut: "/favicon.ico",
    apple: "/GrupoIHI_Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${manrope.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
