'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import HeroTunche from '@/components/el-tunche/HeroTunche'
import SaborCard from '@/components/el-tunche/SaborCard'
import { licores } from '@/data/licores'

const AgeGate = dynamic(() => import('@/components/AgeGate'), { ssr: false })

const SESSION_KEY_AGE = 'tunche-age-verified'

export default function ElTunchePage() {
  const router = useRouter()
  const [ageVerified, setAgeVerified] = useState(false)
  const [showAgeGate, setShowAgeGate] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const verified = sessionStorage.getItem(SESSION_KEY_AGE) === 'true'
    if (!verified) {
      setShowAgeGate(true)
    } else {
      setAgeVerified(true)
    }
  }, [])

  function handleConfirm() {
    sessionStorage.setItem(SESSION_KEY_AGE, 'true')
    setAgeVerified(true)
    setShowAgeGate(false)
  }

  function handleDeny() {
    router.push('/')
  }

  if (!mounted) return null

  return (
    <>
      <AgeGate isOpen={showAgeGate} onConfirm={handleConfirm} onDeny={handleDeny} />
      <Navbar />
      <main>
        <HeroTunche />
        {licores.map((licor, index) => (
          <SaborCard
            key={licor.id}
            licor={licor}
            ageVerified={ageVerified}
            index={index}
          />
        ))}
        <section className="bg-tunche-carbon border-t border-tunche-dorado/10 py-8">
          <p className="text-center font-body text-xs text-tunche-neblina/40 tracking-wide px-6">
            El consumo excesivo de alcohol es dañino para la salud. Solo para mayores de 18 años.
            Bebe con responsabilidad.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
