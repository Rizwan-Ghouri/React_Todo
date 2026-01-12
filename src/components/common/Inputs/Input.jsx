import React from 'react'

const Input = ({className,type,placeholder,onChange, value}) => {
  return (
    <div>
        <input type={type} value={value} className={className} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input
