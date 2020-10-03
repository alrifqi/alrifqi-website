import React from 'react'

export default function PortfolioPage({ portfolio: data }) {
  const imageUrl = `http://localhost:1337${data.cover_image.url}`
  return (
    <div className="w-full flex flex-col items-center">
      <img src={ imageUrl } className="w-4/5" />
    </div>
  )
}