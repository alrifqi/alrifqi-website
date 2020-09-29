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
        <div className="flex flex-row space-x-4 font-light text-rock text-center">
          <Link to="/" className="transition duration-500 ease-in-out hover:font-semibold cursor-pointer w-20">
            Home
          </Link>
          <Link to="/portfolio" className="hover:font-semibold cursor-pointer w-20">
            Portfolio
          </Link>
          <div className="hover:font-semibold cursor-pointer w-20">
            Services
          </div>
          <div className="hover:font-semibold cursor-pointer w-20">
            Skills
          </div>
          <div className="hover:font-semibold cursor-pointer w-20">
            Blogs
          </div>
          <div className="hover:font-semibold cursor-pointer w-20">
            Contact
          </div>
        </div>
      </div>
    </div>
  )
}