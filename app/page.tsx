'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Nosotros from '@/components/Nosotros'
import Productos from '@/components/Productos'
import ElTunche from '@/components/ElTunche'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import AgeGate from '@/components/AgeGate'

export default function Home() {
  const [ageVerified, setAgeVerified] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('tunche-age-ok') === 'true'
  })
  const [showAgeGate, setShowAgeGate] = useState(false)

  function handleAgeConfirm() {
    sessionStorage.setItem('tunche-age-ok', 'true')
    setAgeVerified(true)
    setShowAgeGate(false)
  }

  function handleAgeDeny() {
    setShowAgeGate(false)
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <AgeGate
        isOpen={showAgeGate}
        onConfirm={handleAgeConfirm}
        onDeny={handleAgeDeny}
      />
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Productos />
        <ElTunche
          ageVerified={ageVerified}
          onRequestAge={() => setShowAgeGate(true)}
        />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
