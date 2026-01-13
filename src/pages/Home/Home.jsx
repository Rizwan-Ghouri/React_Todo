import React from 'react'
import Todos from '../Todos/Todos'

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-3xl md:text-6xl p-2 md:absolute md:top-3 md:left-[40%] block bg-[#0F2854] text-[#FFE2AF] font-bold DynaPuff'>Todo App</h1>
        <Todos />
    </div>
  )
}

export default Home
