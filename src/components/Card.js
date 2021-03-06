import React from 'react'

export default function Card(props) {
  return (
    <div
      className="
        border border-rock bg-white flex flex-col items-center p-2 hover:shadow-xl transition duration-200 ease-in-out
      "
      onClick={ () => props.click(props)}
    >
      <img src={ props.img } alt={ props.title } className="h-64" />
      { props.title }
      <div>
        { props.children }
      </div>
    </div>
  )
}