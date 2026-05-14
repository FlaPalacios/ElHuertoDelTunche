'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animations'
import type { ProductoLicor, Sabor } from '@/types'

const saborLabel: Record<Sabor, string> = {
  maracuya: 'Maracuyá',
  fresa: 'Fresa',
  copoazu: 'Copoazú',
}

interface ProductCardProps {
  producto: ProductoLicor
}

export default function ProductCard({ producto }: ProductCardProps) {
  const { descripcion, sabor, presentacion, imageSrc, imageAlt } = producto

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
      className="group relative flex flex-col border border-tunche-dorado/20 bg-tunche-carbon overflow-hidden cursor-default"
    >
      {/* Overlay dorado en hover */}
      <div className="absolute inset-0 bg-tunche-dorado/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      {/* Imagen del producto */}
      <div className="relative w-full aspect-[3/4] bg-tunche-madera overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tunche-carbon/60 via-transparent to-transparent" />

        {/* Presentación badge */}
        <div className="absolute top-4 right-4 border border-tunche-dorado/60 px-2.5 py-1">
          <span className="font-body text-xs tracking-widest text-tunche-dorado">{presentacion}</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-4 p-6">
        <div className="space-y-1">
          <h3 className="font-display text-2xl text-tunche-humo tracking-wide leading-tight">
            {saborLabel[sabor]}
          </h3>
          <p className="font-body text-xs tracking-widest text-tunche-dorado uppercase">
            El Tunche · {presentacion}
          </p>
        </div>

        <div className="h-px w-8 bg-tunche-dorado/40 group-hover:w-full transition-all duration-500" />

        <p className="font-body text-tunche-neblina text-sm leading-relaxed line-clamp-3">
          {descripcion}
        </p>
      </div>
    </motion.article>
  )
}
