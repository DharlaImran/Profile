import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


function index() {
  return (
    <>
      
      <h1 className='bg-red-400 container mx-auto p-5 rounded text-white text-4xl w-2/4 hover:bg-green-300 transition-all cursor-pointer'>Lorem ipsum dolor sit amet.</h1>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default index