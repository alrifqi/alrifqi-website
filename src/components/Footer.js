import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full px-32 pt-10 pb-4 mt-10">
      <div className="border-t border-rock flex flex-row pt-8">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold">Just say hi.</div>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col font-light">
              <div className="text-sm">
                mail me at
              </div>
              <div>
                reza.rifqi@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-light mt-10">
        Copyright <sup>&copy;</sup> 2020. All right reserverd.
      </div>
    </footer>
  )
}