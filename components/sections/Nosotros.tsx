'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/animations'

export default function Nosotros() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative bg-madera-texture section-padding overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,_#0D0D0D30_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Texto */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-blanco">
                Nuestra historia
              </p>
              <h2 className="font-display text-5xl lg:text-6xl text-tunche-dorado tracking-wide leading-tight">
                Nacidos del<br />
                <span className="italic">bosque sagrado</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px w-16 bg-tunche-dorado/50" />

            <motion.p variants={fadeInUp} className="font-body text-tunche-neblina leading-[1.8] text-base">
              El Huerto del Tunche nació en 2025 en un pequeño taller de Cusco, cuando Guillermo decidió
              destilar las frutas que crecen entre los bosques nublados que rodean la ciudad imperial.
              Lo que empezó como una búsqueda personal —honrar los sabores de su tierra— se convirtió
              en una marca artesanal con identidad propia.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-body text-tunche-neblina leading-[1.8] text-base">
              El nombre rinde homenaje al <em className="text-tunche-blanco not-italic font-medium">Tunche</em>,
              el espíritu protector de la selva amazónica en la cosmovisión andina —un ser etéreo que
              habita entre los árboles y guía a quienes respetan la naturaleza. Cada botella lleva ese
              espíritu: salvaje, honesto, cusqueño.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-body text-tunche-neblina leading-[1.8] text-base">
              Trabajamos en lotes pequeños, con frutas frescas seleccionadas de valles cusqueños y la
              Amazonía peruana. Sin atajos, sin artificios. Solo fruta, tiempo y dedicación.
            </motion.p>

          </motion.div>

          {/* Elemento visual decorativo */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4]">
              <div className="absolute inset-0 border border-tunche-dorado/20" />
              <div className="absolute inset-4 border border-tunche-dorado/10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4A3426_0%,_#0D0D0D_100%)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12 text-center">
                <div className="h-px w-12 bg-tunche-dorado/40" />
                <p className="font-display text-2xl text-tunche-blanco italic leading-relaxed">
                  &ldquo;La naturaleza cusqueña destilada en cada gota &rdquo;
                </p>
                <div className="h-px w-12 bg-tunche-dorado/40" />
                <p className="font-body text-xs tracking-[0.3em] uppercase text-tunche-neblina">
                  — Guillermo, fundador
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
