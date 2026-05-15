'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function HeroTunche() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-vino-texture">
      <div className="absolute inset-0 bg-tunche-carbon/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,_#5B0F1640_0%,_transparent_70%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.p
          variants={fadeInUp}
          className="font-body text-xs tracking-[0.45em] uppercase text-tunche-neblina mb-8"
        >
          De la selva de Huayopata · Cusco, Perú
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-7xl sm:text-8xl lg:text-9xl text-tunche-vino tracking-wide leading-none mb-6"
        >
          El Tunche
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-12 bg-tunche-dorado/50" />
          <p className="font-display text-base sm:text-lg text-tunche-neblina italic tracking-wide">
            Licores artesanales macerados en pisco quebranta
          </p>
          <span className="h-px w-12 bg-tunche-dorado/50" />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-body text-tunche-neblina text-sm max-w-lg mx-auto leading-relaxed"
        >
          Pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada
          para llegar a sus paladares y su hogar.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-tunche-neblina/40">
          Los sabores
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-6 bg-gradient-to-b from-tunche-dorado/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
