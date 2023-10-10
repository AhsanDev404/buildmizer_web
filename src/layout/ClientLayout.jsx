import React from 'react'
import Header from '../pages/client/Header'
import Footer from '../pages/client/Footer'

export default function ClientLayout({children}) {
  return (
    <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
  )
}
