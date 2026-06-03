'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations'
import { chocolate } from '@/data/chocolate'
import { mermeladas } from '@/data/mermeladas'

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
          className="text-center mb-20 space-y-4"
        >
          <motion.p variants={fadeInUp} className="font-body text-xs tracking-[0.35em] uppercase text-tunche-blanco">
            Nuestros productos
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-5xl lg:text-6xl text-tunche-vino tracking-wide">
            La cosecha<br />
            <span className="italic">del huerto</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-tunche-vino/70" />
            <p className="font-body text-tunche-neblina text-sm max-w-md">
              Tres familias de producto, un solo origen. Frutas frescas, producción artesanal, lotes pequeños.
            </p>
            <span className="h-px w-14 bg-tunche-vino/70" />
          </motion.div>
        </motion.div>

        {/* Bloque 1 — Chocolate */}
        <ProductoBloque
          isInView={isInView}
          imageSrc="/images/chocolate_presentacion.png"
          imageAlt={chocolate.imageAlt}
          supLabel="Chocolate artesanal"
          titulo="Copolate"
          descripcion={chocolate.descripcion}
          detalle={`${chocolate.peso} · ${chocolate.beneficios.join(' · ')}`}
          imageLeft
        />

        <div className="h-px bg-tunche-dorado/10 my-16" />

        {/* Bloque 2 — Mermeladas */}
        <ProductoBloque
          isInView={isInView}
          imageSrc="/images/mermeladas_presentacion.png"
          imageAlt="Mermeladas artesanales El Huerto del Tunche"
          supLabel="Mermeladas artesanales"
          titulo="Sabores de la tierra"
          descripcion="Mermelada natural de producción artesanal. Siente la fruta misma en cada porción, el dulzor y la explosión de cada fruta llevado a su extremo más sabroso."
          detalle={mermeladas.map((m) => `${m.nombre}`).join(' · ')}
          imageLeft={false}
        />

        <div className="h-px bg-tunche-dorado/10 my-16" />

        {/* Bloque 3 — El Tunche CTA */}
        <ElTuncheBloque isInView={isInView} />

      </div>
    </section>
  )
}

interface ProductoBloqueProps {
  isInView: boolean
  imageSrc: string
  imageAlt: string
  supLabel: string
  titulo: string
  descripcion: string
  detalle: string
  imageLeft: boolean
}

function ProductoBloque({
  isInView, imageSrc, imageAlt, supLabel, titulo, descripcion, detalle, imageLeft,
}: ProductoBloqueProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!imageLeft ? 'lg:grid-flow-dense' : ''}`}>

      {/* Imagen */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`relative ${!imageLeft ? 'lg:col-start-2' : ''}`}
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 border border-tunche-dorado/20 z-10" />
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tunche-carbon/30 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Texto */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`space-y-6 ${!imageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}
      >
        <motion.div variants={fadeInUp} className="space-y-2">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">
            {supLabel}
          </p>
          <h3 className="font-display text-4xl lg:text-5xl text-tunche-vino tracking-wide leading-tight">
            {titulo}
          </h3>
        </motion.div>

        <motion.div variants={fadeInUp} className="h-px w-12 bg-tunche-dorado/40" />

        <motion.p variants={fadeInUp} className="font-body text-tunche-neblina leading-[1.8] text-base">
          {descripcion}
        </motion.p>

        <motion.p variants={fadeInUp} className="font-body text-tunche-dorado/70 text-xs tracking-widest">
          {detalle}
        </motion.p>
      </motion.div>

    </div>
  )
}

function ElTuncheBloque({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative overflow-hidden"
    >
      {/* Imagen de fondo atmosférica */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7] overflow-hidden">
        <div className="absolute inset-0 border border-tunche-dorado/20 z-10" />
        <Image
          src="/images/selva-misteriosa-eltunche.jpg"
          alt="El Tunche — licores artesanales de Huayopata"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-tunche-carbon/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,_#5B0F1630_0%,_transparent_70%)]" />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-6">
          <motion.p variants={fadeInUp} className="font-body text-xs tracking-[0.4em] uppercase text-tunche-dorado">
            <em className="text-tunche-neblina not-italic font-medium">Licores artesanales</em>
          </motion.p>
          <motion.h3 variants={fadeInUp} className="font-display text-5xl lg:text-7xl text-tunche-vino tracking-wide">
            El Tunche
          </motion.h3>
          <motion.p variants={fadeInUp} className="font-body text-tunche-neblina text-sm max-w-md italic leading-relaxed">
            Maracuyá · Fresa · Copoazú<br />
            Macerados en pisco quebranta · Huayopata, Cusco
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/el-tunche"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border border-tunche-blanco text-tunche-blanco hover:bg-tunche-neblina hover:text-tunche-carbon transition-all duration-300"
            >
              Descubre los autenticos licores 
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
