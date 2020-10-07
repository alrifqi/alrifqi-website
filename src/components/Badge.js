import React from 'react'

export default function Badge(props) {
  return (
    <div
      className="rounded-full px-2 border border-black text-xs font-light cursor-default"
    >
      { props.text }
    </div>
  )
}