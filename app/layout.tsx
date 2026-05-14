import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://huertodeltunche.pe'),
  title: 'El Huerto del Tunche — Licores Artesanales de Cusco',
  description:
    'Licores artesanales elaborados con frutas tropicales y amazónicas del corazón del Cusco. Copoazú, fresa andina y maracuyá amazónica en pequeños lotes con técnica artesanal.',
  keywords: ['licores artesanales', 'Cusco', 'copoazú', 'maracuyá', 'fresa', 'licor peruano'],
  openGraph: {
    title: 'El Huerto del Tunche — Licores Artesanales de Cusco',
    description: 'Destilado en la sombra del bosque. Licores artesanales de la selva y el valle sagrado.',
    type: 'website',
    locale: 'es_PE',
    images: [{ url: '/images/logo-el_huerto_del_tunche.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Huerto del Tunche — Licores Artesanales de Cusco',
    description: 'Destilado en la sombra del bosque.',
  },
  robots: { index: true, follow: true },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-tunche-negro font-body antialiased">
        {children}
      </body>
    </html>
  )
}
