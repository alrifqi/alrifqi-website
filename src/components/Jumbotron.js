import React from 'react'
// TODO: uninstall Particles.js
// import Particles from 'react-particles-js'
import alrifqi from '../assets/images/alrifqi.png'

export default function Jumbotron () {
  return (
    <div className="w-full flex flex-row justify-between items-center px-32 py-20">
      <div className="text-left text-rock" style={ style.jumbotron }>
        <div className="text-6xl font-hairline">
          I'm
          <span class="ml-2 font-semibold">Muhammad Reza Nurrifqi</span>
        </div>
        <div class="font-thin text-3xl">
          Software Engineer, Learner, Father.
        </div>
      </div>
      <img src={alrifqi} class="w-1/4" />
    </div>
  )
}

const style = {
  jumbotron: {
    top: '30%'
  }
}