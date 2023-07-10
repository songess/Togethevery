import React from 'react'
import "./ColorButton.css"

export default function ColorButton(props) {
  return (
    <button className="color_button" onClick={props.onClick}>{props.children}</button>
  )
}
