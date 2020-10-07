import React from 'react'
import Badge from './Badge'

export default function BlogPage({ blog: data }) {
  console.log(data)
  const imageUrl = `http://localhost:1337${data.cover_image.url}`
  return (
    <div className="w-full flex flex-col items-center">
      <img src={ imageUrl } className="w-4/5" />
      <div className="w-4/5 text-left text-3xl font-bold mt-10">
        { data.title }
      </div>
      <div className="w-4/5 mt-10 pt-4 border-t border-black antialiased font-light">
        { data.content }
      </div>
    </div>
  )
}