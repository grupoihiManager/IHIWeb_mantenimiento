'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WhatsAppIcon } from '../components/ui/icons';
import { CONTACT_INFO, COMPANY_INFO, MAINTENANCE_CONTENT } from '../lib/constants';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-12">
      
      {/* Logo/Brand */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        
      </motion.div>

      {/* Título Principal */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-manrope leading-tight text-center max-w-4xl"
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

      {/* Imagen Principal - Protagonista */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16 relative w-full max-w-2xl mx-auto"
      >
        <Image 
          src="/maintenance.png" 
          alt="En mantenimiento - Grupo IHI"
          width={800}
          height={600}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Botón de WhatsApp */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <motion.a 
          href={CONTACT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold border-2 border-gray-300 hover:border-gray-400 rounded-xl transition-all duration-200 font-inter text-base shadow-lg hover:shadow-xl"
        >
          <WhatsAppIcon className="w-6 h-6" />
          WhatsApp
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-sm text-gray-500 font-inter text-center"
      >
        {COMPANY_INFO.copyright}
      </motion.p>
      
    </div>
  );
}
