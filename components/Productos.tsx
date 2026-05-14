'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import ProductCard from '@/components/ProductCard'
import { licores } from '@/data/productos'

export default function Productos() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="productos"
      ref={ref}
      className="relative bg-tunche-carbon section-padding"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_#4A342620_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado de sección */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 space-y-4"
        >
          <motion.p variants={fadeInUp} className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">
            Nuestros productos
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-5xl lg:text-6xl text-tunche-humo tracking-wide">
            Sabores del<br />
            <span className="italic text-tunche-dorado">corazón amazónico</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-tunche-dorado/40" />
            <p className="font-body text-tunche-neblina text-sm max-w-md">
              Cada producto es un retrato de la tierra que lo vio nacer. Frutas frescas, producción artesanal, lotes pequeños.
            </p>
            <span className="h-px w-12 bg-tunche-dorado/40" />
          </motion.div>
        </motion.div>

        {/* Grid de licores — presentación de los 3 sabores principales */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {licores.filter((p) => p.presentacion === '750ml').map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </motion.div>

        {/* Nota al pie de sección */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center font-body text-xs text-tunche-neblina/60 mt-12 tracking-wide"
        >
          Producción limitada. Disponible en Cusco y pedidos directos.
        </motion.p>
      </div>
    </section>
  )
}
