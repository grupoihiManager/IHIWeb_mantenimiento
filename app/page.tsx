'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WhatsAppIcon } from '../components/ui/icons';
import { CONTACT_INFO, COMPANY_INFO, MAINTENANCE_CONTENT } from '../lib/constants';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center"
      >
        
        {/* Título */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 font-manrope leading-tight"
        >
          {MAINTENANCE_CONTENT.title}
        </motion.h1>

        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-gray-600 mb-12 font-inter max-w-xl mx-auto"
        >
          {MAINTENANCE_CONTENT.description}
        </motion.p>

        {/* Imagen de Mantenimiento */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 relative w-full max-w-md mx-auto"
        >
          <Image 
            src="/maintenance.png" 
            alt="En mantenimiento"
            width={500}
            height={400}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* Botón de WhatsApp */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <motion.a 
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold border-2 border-gray-900 hover:border-gray-700 rounded-xl transition-all duration-200 font-inter text-base"
          >
            <WhatsAppIcon className="w-6 h-6" />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-gray-400 font-inter"
        >
          {COMPANY_INFO.copyright}
        </motion.p>
        
      </motion.div>
    </div>
  );
}
