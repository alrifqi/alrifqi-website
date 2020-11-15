import React from 'react'
// import Badge from './Badge'

export default function BlogPage({ blog: data }) {
  const imageUrl = `${process.env.GATSBY_API_URL}${data.cover_image.url}`
  return (
    <div className="w-full flex flex-col items-center">
      <img src={ imageUrl } className="w-4/5" alt="" />
      <div className="w-4/5 text-left text-3xl font-bold mt-10">
        { data.title }
      </div>
      <div className="w-4/5 mt-10 pt-4 border-t border-black antialiased font-light">
        { data.content }
      </div>
    </div>
  )
}