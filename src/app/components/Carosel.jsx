 "use client";  
 import React from 'react'
import Slider from "react-slick"

const Carosel = () => {

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 }

  return (
    <Slider {...settings}>
       <div className='text-white w-1/5 h-28 z-40'>
        <h1 className="lg:text-4xl text-white font-bold mb-8">Welcome The Kithcen</h1>
        <p className='text-white'>hehe</p>
        <button className="bg-amber-400 text-white p-2 rounded-2xl mt-4">Order Now</button>
       </div>
        <div className='text-white w-1/5 h-28'>
        <h1 className="lg:text-4xl text-white font-bold mb-8">Welcome The Kithcen</h1>
        <p className='text-white'>hehe</p>
        <button className="bg-amber-400 text-white p-2 rounded-2xl mt-4">Order Now</button>
       </div>
       

    </Slider>
  )
}

export default Carosel