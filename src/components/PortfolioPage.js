import React from 'react'
import Badge from './Badge'

export default function PortfolioPage({ portfolio: data }) {
  const imageUrl = `http://localhost:1337${data.cover_image.url}`
  const techStackList = data.tech_stack.map((val) => {
    return <Badge text={ val } key={ val } />
  })
  return (
    <div className="w-full flex flex-col items-center">
      <img src={ imageUrl } className="w-4/5" />
      <div className="w-4/5 text-left text-3xl font-bold mt-10">
        { data.name }
      </div>
      <div className="w-4/5 text-left flex flex-row">
        <a className="cursor-pointer hover:underline" href={ data.url } target="_blank">
          { data.url }
        </a>
      </div>
      <div className="w-4/5 text-left flex flex-row space-x-2 mt-2">
        { techStackList }
      </div>
      <div className="w-4/5 mt-10 pt-4 border-t border-black antialiased font-light">
        { data.description }
      </div>
    </div>
  )
}