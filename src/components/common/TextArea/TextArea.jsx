import React from 'react'

const TextArea = ({className,placeholder, value, onChange}) => {
  return (
    <div>
      <textarea className={className} value={value} placeholder={placeholder} onChange={onChange}></textarea>
    </div>
  )
}

export default TextArea
