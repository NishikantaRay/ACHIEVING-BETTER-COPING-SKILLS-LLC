import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navBar/Navbar'
import WelcomeAdmin from '../components/welcomeAdmin/WelcomeAdmin'
import WelcomeAdminImg from '../components/WelcomeAdminImg'
export default function WelcomeAdminPage() {
  return (
    <div>
      <Navbar />
      <WelcomeAdminImg />
      <WelcomeAdmin />
      <Footer />
    </div>
  )
}
