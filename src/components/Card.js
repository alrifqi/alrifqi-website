import React from 'react'

export default function Card(props) {
  return (
    <div className="border border-rock flex flex-col items-center p-2 hover:shadow-lg">
      { props.title }
    </div>
  )
}