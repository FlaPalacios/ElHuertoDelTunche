'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

function sanitizeInput(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim()
}

interface FormState {
  nombre: string
  email: string
  mensaje: string
}

export default function Contacto() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({ nombre: '', email: '', mensaje: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formspreeId || formspreeId === 'placeholder_id') {
      setStatus('error')
      return
    }
    setStatus('sending')

    const payload = {
      nombre: sanitizeInput(form.nombre),
      email: sanitizeInput(form.email),
      mensaje: sanitizeInput(form.mensaje),
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border border-tunche-dorado/20 px-4 py-3 font-body text-sm text-tunche-humo placeholder-tunche-gris/50 focus:outline-none focus:border-tunche-dorado/60 transition-colors duration-300'

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative bg-tunche-marron section-padding"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,_#0D0D0D30_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Información de contacto */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="font-body text-xs tracking-[0.35em] uppercase text-tunche-dorado">Contacto</p>
              <h2 className="font-display text-5xl lg:text-6xl text-tunche-humo tracking-wide leading-tight">
                Hablemos<br />
                <span className="italic text-tunche-dorado-claro">del espíritu</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-px w-16 bg-tunche-dorado/50" />

            <motion.p variants={fadeInUp} className="font-body text-tunche-gris leading-relaxed">
              ¿Quieres saber más sobre nuestros licores, hacer un pedido o explorar distribución?
              Escríbenos y te responderemos a la brevedad.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-5">
              {[
                { label: 'Teléfono', value: '+51 984 231 047' },
                { label: 'Email', value: 'hola@huertodeltunche.pe' },
                { label: 'Ubicación', value: 'Cusco, Perú — Valle Sagrado' },
                { label: 'Horario', value: 'Lunes a Sábado, 9:00 – 18:00' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-body text-xs tracking-widest uppercase text-tunche-dorado/80 w-20 flex-shrink-0 mt-0.5">
                    {item.label}
                  </span>
                  <span className="font-body text-tunche-gris text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {status === 'success' ? (
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center justify-center h-full gap-4 text-center py-16"
              >
                <div className="h-px w-12 bg-tunche-dorado/50" />
                <p className="font-display text-3xl text-tunche-humo">Mensaje enviado</p>
                <p className="font-body text-tunche-gris text-sm">
                  Gracias por escribirnos. Te responderemos pronto.
                </p>
                <div className="h-px w-12 bg-tunche-dorado/50" />
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="nombre" className="block font-body text-xs tracking-widest uppercase text-tunche-dorado/80 mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-xs tracking-widest uppercase text-tunche-dorado/80 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block font-body text-xs tracking-widest uppercase text-tunche-dorado/80 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-body text-xs text-red-400/80">
                    Hubo un error al enviar el mensaje. Intenta de nuevo o contáctanos directamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 border border-tunche-dorado text-tunche-dorado font-body text-xs tracking-[0.3em] uppercase hover:bg-tunche-dorado hover:text-tunche-negro transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </motion.form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
