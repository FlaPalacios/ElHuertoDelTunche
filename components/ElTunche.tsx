'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '@/lib/animations'
import { licores } from '@/data/productos'
import type { Sabor } from '@/types'

interface ElTuncheProps {
  ageVerified: boolean
  onRequestAge: () => void
}

const saborLabel: Record<Sabor, string> = {
  maracuya: 'Maracuyá',
  fresa: 'Fresa',
  copoazu: 'Copoazú',
}

const sabores: Sabor[] = ['maracuya', 'fresa', 'copoazu']

export default function ElTunche({ ageVerified, onRequestAge }: ElTuncheProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  function handleProductClick() {
    if (!ageVerified) {
      onRequestAge()
    }
  }

  return (
    <section
      id="el-tunche"
      ref={ref}
      className="relative bg-vino-texture section-padding overflow-hidden"
    >
      {/* Overlay de oscurecimiento para mantener legibilidad */}
      <div className="absolute inset-0 bg-tunche-carbon/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,_#5B0F1640_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 space-y-4"
        >
          <motion.p variants={fadeInUp} className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">
            De la selva de Huayopata
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-5xl lg:text-6xl text-tunche-humo tracking-wide">
            El Tunche
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-tunche-dorado/40" />
            <p className="font-body text-tunche-neblina text-sm max-w-md italic">
              Pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada
              para llegar a sus paladares y su hogar.
            </p>
            <span className="h-px w-12 bg-tunche-dorado/40" />
          </motion.div>
        </motion.div>

        {/* Grid por sabor */}
        {sabores.map((sabor, sabIndex) => {
          const productosDeSabor = licores.filter((p) => p.sabor === sabor)
          return (
            <motion.div
              key={sabor}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mb-14"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
                style={{ transitionDelay: `${sabIndex * 0.1}s` }}
              >
                <span className="h-px flex-1 bg-tunche-dorado/20" />
                <h3 className="font-display text-2xl text-tunche-dorado tracking-widest">
                  {saborLabel[sabor]}
                </h3>
                <span className="h-px flex-1 bg-tunche-dorado/20" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {productosDeSabor.map((producto) => (
                  <motion.article
                    key={producto.id}
                    variants={scaleIn}
                    whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
                    onClick={handleProductClick}
                    className="group relative flex flex-col border border-tunche-dorado/20 bg-tunche-carbon/60 overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-tunche-dorado/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                    <div className="relative w-full aspect-[3/4] bg-tunche-vino/30 overflow-hidden">
                      <Image
                        src={producto.imageSrc}
                        alt={producto.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tunche-carbon/70 via-transparent to-transparent" />

                      <div className="absolute top-4 right-4 border border-tunche-dorado/60 px-2.5 py-1 bg-tunche-carbon/60">
                        <span className="font-body text-xs tracking-widest text-tunche-dorado">
                          {producto.presentacion}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 p-5">
                      <h4 className="font-display text-xl text-tunche-humo tracking-wide leading-tight">
                        {saborLabel[producto.sabor]}
                        <span className="block font-body text-xs text-tunche-dorado/70 tracking-widest uppercase mt-0.5">
                          {producto.presentacion}
                        </span>
                      </h4>

                      <div className="h-px w-8 bg-tunche-dorado/40 group-hover:w-full transition-all duration-500" />

                      {ageVerified ? (
                        <p className="font-body text-tunche-neblina text-xs leading-relaxed line-clamp-3">
                          {producto.descripcion}
                        </p>
                      ) : (
                        <p className="font-body text-tunche-neblina/60 text-xs tracking-wide">
                          Verificar edad para ver detalles →
                        </p>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* Aviso legal */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center font-body text-xs text-tunche-neblina/40 mt-8 tracking-wide"
        >
          El consumo excesivo de alcohol es dañino para la salud. Solo para mayores de 18 años.
        </motion.p>
      </div>
    </section>
  )
}
