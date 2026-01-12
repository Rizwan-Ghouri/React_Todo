import React from 'react'

const Button = ({className,btnText,onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{btnText}</button>
    </div>
  )
}

export default Button
