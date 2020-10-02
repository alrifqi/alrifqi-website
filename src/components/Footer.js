import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full px-32 py-10">
      <div className="border-t border-rock flex flex-row">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold">Just say hi.</div>
        </div>
      </div>
      <div className="w-full text-center font-light mt-10">
        Copyright <sup>&copy;</sup> 2020. All right reserverd.
      </div>
    </footer>
  )
}