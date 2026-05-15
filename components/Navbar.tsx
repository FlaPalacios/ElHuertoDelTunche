'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Productos', href: '/#productos' },
  { label: 'El Tunche', href: '/el-tunche' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-tunche-carbon/95 backdrop-blur-md border-b border-tunche-dorado/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/#inicio" className="relative w-10 h-10 flex-shrink-0" aria-label="El Huerto del Tunche — Inicio">
          <Image
            src="/images/logo-el_huerto_del_tunche.jpg"
            alt="Logo El Huerto del Tunche"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-xs tracking-widest uppercase text-tunche-neblina hover:text-tunche-blanco transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-tunche-dorado transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-tunche-blanco transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-tunche-blanco transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-tunche-blanco transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-tunche-carbon/98 border-t border-tunche-dorado/10"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-body text-sm tracking-widest uppercase text-tunche-neblina hover:text-tunche-dorado transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
