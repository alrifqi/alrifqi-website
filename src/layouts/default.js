import React from 'react'
import Header from '../components/header'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}