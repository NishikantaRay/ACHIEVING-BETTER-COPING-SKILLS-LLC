import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navBar/Navbar'
import VerifiedImgSection from '../components/VerifiedImgSection'
import VerifiedSection from '../components/verifiedSection/VerifiedSection'

export default function VerifiedPage() {
  return (
    <div>
      <Navbar />
      <VerifiedImgSection />
      <VerifiedSection />
      <Footer />
    </div>
  )
}
