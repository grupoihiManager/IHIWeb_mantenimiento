export const CONTACT_INFO = {
  email: 'contacto@grupoihi.com',
  whatsapp: {
    number: '523312345678',
    displayNumber: '+52 33 1234 5678',
    url: 'https://wa.me/523312345678'
  }
} as const;

export const COMPANY_INFO = {
  name: 'Grupo IHI',
  year: new Date().getFullYear(),
  copyright: `© ${new Date().getFullYear()} Grupo IHI. Todos los derechos reservados.`
} as const;

export const MAINTENANCE_CONTENT = {
  title: 'Estamos en Mantenimiento',
  description: 'Estamos mejorando nuestra plataforma para ofrecerte una mejor experiencia. Estaremos de vuelta muy pronto.',
  workingMessage: 'Trabajando en mejoras'
} as const;