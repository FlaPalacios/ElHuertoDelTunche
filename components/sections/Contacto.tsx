'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const contactData = [
  { label: 'Teléfono', value: '+51 902 265 556' },
  { label: 'Email', value: 'hola@huertodeltunche.pe' },
  { label: 'Ubicación', value: 'Cusco, Perú — Valle Sagrado' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/huerto_del_tunche/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
]

export default function Contacto() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative bg-tunche-carbon section-padding"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,_#4A342620_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Encabezado */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">Contacto</p>
              <h2 className="font-display text-5xl lg:text-6xl text-tunche-neblina tracking-wide leading-tight">
                Hablemos<br />
                <span className="italic">del espíritu</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px w-16 bg-tunche-dorado/50" />

            <motion.p variants={fadeInUp} className="font-body text-tunche-neblina leading-relaxed">
              ¿Quieres saber más sobre nuestros productos, hacer un pedido o explorar distribución?
              Contáctanos directamente y te responderemos a la brevedad.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-5">
              {contactData.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-body text-xs tracking-widest uppercase text-tunche-dorado/80 w-20 flex-shrink-0 mt-0.5">
                    {item.label}
                  </span>
                  <span className="font-body text-tunche-blanco text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">Síguenos</p>
              <p className="font-display text-2xl text-tunche-blanco tracking-wide">
                Encuéntranos en redes
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-tunche-neblina hover:text-tunche-dorado transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="border border-tunche-blanco/20 p-8 space-y-4">
              <p className="font-display text-xl text-tunche-dorado italic tracking-wide">
                &ldquo;Producción limitada.<br />Disponible en Cusco y pedidos directos.&rdquo;
              </p>
              <div className="h-px w-12 bg-tunche-blanco/40" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-tunche-blanco">
                El Huerto del Tunche · Desde 2025
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
