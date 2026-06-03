'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations'
import type { ProductoLicor, Sabor, PresentacionLicor } from '@/types'

interface SaborCardProps {
  licor: ProductoLicor
  ageVerified: boolean
  index: number
}

const saborLabel: Record<Sabor, string> = {
  maracuya: 'Maracuyá',
  fresa: 'Fresa',
  copoazu: 'Copoazú',
}

const saborTagline: Record<Sabor, string> = {
  maracuya: 'Acidez vibrante de la selva amazónica',
  fresa: 'Dulzor intenso del Valle Sagrado',
  copoazu: 'Exótico primo del cacao de Huayopata',
}

export default function SaborCard({ licor, ageVerified, index }: SaborCardProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedIdx, setSelectedIdx] = useState(0)

  const isEven = index % 2 === 0

  const selectedPresentacion = licor.presentaciones[selectedIdx] as PresentacionLicor
  const currentImage =
    licor.presentacionImagenes?.[selectedPresentacion] ?? licor.imageSrc

  return (
    <section
      ref={ref}
      className={`relative section-padding overflow-hidden ${
        licor.sabor === 'fresa' ? 'bg-tunche-carbon' : isEven ? 'bg-tunche-carbon' : 'bg-tunche-madera'
      }`}
    >
      {(isEven || licor.sabor === 'fresa') && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,_#5B0F1615_0%,_transparent_70%)]" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

          {/* Imagen con carrusel */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
              <div className="absolute inset-0 border border-tunche-dorado/20 z-10" />
              <div className="absolute -inset-2 border border-tunche-dorado/8 z-10" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage + selectedIdx}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage}
                    alt={`${licor.imageAlt} — ${selectedPresentacion}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-tunche-carbon/40 via-transparent to-transparent z-10" />
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">
                El Tunche
              </p>
              <h2 className="font-display text-5xl lg:text-6xl text-tunche-vino tracking-wide leading-tight">
                {saborLabel[licor.sabor]}
              </h2>
              <p className="font-body text-tunche-neblina text-sm italic tracking-wide">
                {saborTagline[licor.sabor]}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px w-16 bg-tunche-dorado/40" />

            {ageVerified ? (
              <motion.p variants={fadeInUp} className="font-body text-tunche-blanco leading-[1.8] text-base">
                {licor.descripcion}
              </motion.p>
            ) : (
              <motion.p variants={fadeInUp} className="font-body text-tunche-neblina/60 text-sm italic">
                Contenido disponible solo para mayores de 18 años verificados.
              </motion.p>
            )}

            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-tunche-dorado/80">
                Presentaciones
              </p>
              <div className="flex gap-3">
                {licor.presentaciones.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setSelectedIdx(i)}
                    className={`font-body text-xs tracking-widest border px-3 py-1.5 transition-all duration-300 ${
                      i === selectedIdx
                        ? 'border-tunche-dorado text-tunche-dorado bg-tunche-dorado/10'
                        : 'border-tunche-dorado/30 text-tunche-neblina hover:border-tunche-dorado/60 hover:text-tunche-blanco'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
