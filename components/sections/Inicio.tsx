'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon-texture"
    >
      {/* Fondo atmosférico */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,_#241915_10%,_#0D0D0D_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_10%,_#B08A4708_00%,_transparent_70%)]" />

      {/* Línea decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-tunche-dorado/50 to-transparent origin-top"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="font-body text-xs tracking-[0.4em] uppercase text-tunche-neblina mb-8"
        >
          Cusco, Perú
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-tunche-dorado tracking-wide leading-none mb-6"
        >
          El Huerto<br />
          <span className="italic">del Tunche</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-tunche-dorado/60" />
          <p className="font-display text-lg sm:text-xl text-tunche-neblina italic tracking-wide">
            Elaborados en la sombra del bosque
          </p>
          <span className="h-px w-12 bg-tunche-dorado/60" />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-body text-tunche-neblina text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-12"
        >
          Licores artesanales elaborados con frutas de la selva y el valle sagrado.<br />
          Pequeños lotes, técnica propia, sabores que no se olvidan.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a
            href="#productos"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border border-tunche-dorado text-tunche-dorado hover:bg-tunche-dorado hover:text-tunche-carbon transition-all duration-300"
          >
            Descubrir nuestros productos
          </a>
        </motion.div>
      </motion.div>

      {/* Línea decorativa inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-tunche-neblina/50">Ver más</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-tunche-dorado/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
