import React from 'react'

interface ButtonProperties{
  nameOfButton:string
}

const Button:React.FC<ButtonProperties> = (props) => {
  return (
    <button className="bluebuttons">{props.nameOfButton}</button>
  )
}

export default Button