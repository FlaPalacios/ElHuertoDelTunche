'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface AgeGateProps {
  isOpen: boolean
  onConfirm: () => void
  onDeny: () => void
}

export default function AgeGate({ isOpen, onConfirm, onDeny }: AgeGateProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] px-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,_#080808_0%,_#181818_90%)]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
            className="relative z-10 flex flex-col items-center gap-8 max-w-md text-center"
          >
            <div className="relative w-32 h-32">
              <Image
                src="/images/logo-el_huerto_del_tunche.jpg"
                alt="Logo El Huerto del Tunche"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="border-t border-tunche-dorado/40 w-36" />

            <div className="space-y-3">
              <h2 className="font-display text-4xl text-tunche-dorado tracking-wide">
                El Tunche
              </h2>
              <p className="font-body text-tunche-neblina text-sm leading-relaxed">
                Esta sección contiene información sobre bebidas alcohólicas.<br />
                Para continuar debes ser mayor de edad.
              </p>
            </div>

            <p className="font-display text-xl text-tunche-dorado tracking-widest">
              ¿Eres mayor de 18 años?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={onConfirm}
                className="flex-1 px-8 py-3 border border-tunche-dorado text-tunche-dorado font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-tunche-dorado hover:text-tunche-carbon"
              >
                Sí, tengo 18 o más
              </button>
              <button
                onClick={onDeny}
                className="flex-1 px-8 py-3 border border-tunche-neblina/40 text-tunche-neblina font-body text-sm tracking-widest uppercase transition-all duration-300 hover:border-tunche-neblina hover:text-tunche-blanco"
              >
                No, soy menor
              </button>
            </div>

            <p className="font-body text-tunche-neblina/60 text-xs">
              El consumo excesivo de alcohol es dañino para la salud.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
