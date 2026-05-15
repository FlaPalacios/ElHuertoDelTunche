import Image from 'next/image'

interface SocialLink {
  label: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
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

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'El Tunche', href: '/el-tunche' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-tunche-carbon border-t border-tunche-dorado/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Logo y tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo-el_huerto_del_tunche.jpg"
                  alt="Logo El Huerto del Tunche"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg text-tunche-blanco tracking-wide">El Huerto del Tunche</p>
                <p className="font-body text-xs text-tunche-neblina tracking-wider">Cusco, Perú</p>
              </div>
            </div>
            <p className="font-body text-tunche-neblina/70 text-xs leading-relaxed max-w-[200px]">
              Productos artesanales elaborados con frutas de la selva y el valle sagrado.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-tunche-dorado/80">Navegación</p>
            <nav aria-label="Pie de página">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-tunche-neblina hover:text-tunche-blanco transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-tunche-dorado/80">Síguenos</p>
            <div className="flex gap-4">
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
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="h-px bg-tunche-dorado/10 my-10" />

        {/* Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body text-xs text-tunche-neblina/50 leading-relaxed max-w-lg">
            Este sitio es exclusivo para mayores de 18 años. El consumo excesivo de alcohol es dañino para la salud.
            Bebe con responsabilidad.
          </p>
          <p className="font-body text-xs text-tunche-neblina/40 flex-shrink-0">
            © 2025 El Huerto del Tunche. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
