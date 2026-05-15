import Navbar from '@/components/Navbar'
import Inicio from '@/components/sections/Inicio'
import Nosotros from '@/components/sections/Nosotros'
import Productos from '@/components/sections/Productos'
import Contacto from '@/components/sections/Contacto'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <Nosotros />
        <Productos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
