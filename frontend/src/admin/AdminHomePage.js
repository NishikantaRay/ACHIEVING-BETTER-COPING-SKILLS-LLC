import React from 'react'
import AdminLogin from '../components/adminLogin/AdminLogin'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navBar/Navbar'

export default function AdminHomePage() {
  return (
    <div>
      <Navbar />
      <AdminLogin />
      <Footer />
    </div>
  )
}
