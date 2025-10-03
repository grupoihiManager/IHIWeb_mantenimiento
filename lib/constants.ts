export const CONTACT_INFO = {
  email: 'contacto@grupoihi.com',
  whatsapp: {
    number: '523338705860',
    displayNumber: '+52 33 3870 5860',
    url: 'https://wa.me/523338705860'
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