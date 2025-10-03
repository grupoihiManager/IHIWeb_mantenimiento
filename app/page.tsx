'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WhatsAppIcon } from '../components/ui/icons';
import { CONTACT_INFO, COMPANY_INFO, MAINTENANCE_CONTENT } from '../lib/constants';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-12 relative">

      {/* Logo Grupo IHI */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <Image
          src="/GrupoIHI_Icon.svg"
          alt="Grupo IHI"
          width={64}
          height={64}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 opacity-80"
        />
      </motion.div>

      {/* Título Principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-manrope leading-tight text-center max-w-4xl"
      >
        {MAINTENANCE_CONTENT.title}
      </motion.h1>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 mb-16 font-inter max-w-2xl mx-auto text-center leading-relaxed"
      >
        {MAINTENANCE_CONTENT.description}
      </motion.p>

      {/* Imagen Principal - Protagonista (más grande) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16 relative w-full max-w-4xl mx-auto"
      >
        <Image
          src="/maintenance.png"
          alt="En mantenimiento - Grupo IHI"
          width={1000}
          height={750}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-auto pt-8"
      >
        <p className="text-sm text-gray-500 font-inter text-center mb-4">
          {COMPANY_INFO.copyright}
        </p>

        {/* Designed by Abbrix */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-inter">
          <span>designed by:</span>
          <Image
            src="/Abbrix_logo.svg"
            alt="Abbrix"
            width={40}
            height={12}
            className="opacity-70 hover:opacity-100 transition-opacity duration-200 filter grayscale"
            style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(86%)' }}
          />
        </div>
      </motion.div>

      {/* Botón de WhatsApp - Icono discreto en esquina inferior izquierda */}
      <motion.a
        href={CONTACT_INFO.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </motion.a>

    </div>
  );
}
