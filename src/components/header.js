import React from 'react'
import { Link } from 'gatsby'
import alrifqi from '../assets/images/alrifqi.png'

export default function Header() {
  return (
    <div className="border-b border-platinum flex flex-row justify-center items-center py-2 lg:px-32 md:px-32">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="cursor-pointer">
          <img src={alrifqi} alt="Alrifqi" className="w-12 h-12 rounded-full"/>
        </div>
        <div className="flex flex-row space-x-4 font-light text-rock">
          <Link to="/">
            Home
          </Link>
          <Link to="/portfolio">
            Portfolio
          </Link>
          <div>
            Services
          </div>
          <div>
            Skills
          </div>
          <div>
            Blogs
          </div>
          <div>
            Contact
          </div>
        </div>
      </div>
    </div>
  )
}