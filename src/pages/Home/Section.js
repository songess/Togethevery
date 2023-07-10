import React from 'react'
import "./Section.css"

export default function Section(props) {
  return (
    <div className='sec'>{props.children}</div>
  )
}
