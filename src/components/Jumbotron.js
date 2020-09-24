import React from 'react'
import Particles from 'react-particles-js'

export default function Jumbotron () {
  return (
    <div className="w-full flex flex-col items-center">
      <Particles
        className="w-full"
        height="70vh"
        style={{
          width: '100%',
          backgroundColor: '#2D3748'
        }}
      />
        <div className="w-3/4 text-left text-white absolute" style={ style.jumbotron }>
          <div className="text-6xl font-bold">
            My Name is Reza
          </div>
          <div>
            And I am a
          </div>
        </div>
    </div>
  )
}

const style = {
  jumbotron: {
    top: '30%'
  }
}