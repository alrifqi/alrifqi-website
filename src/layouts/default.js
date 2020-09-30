import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}