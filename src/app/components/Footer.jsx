import React from 'react'
import Link from 'next/link'
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { ImPinterest2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <section className='flex justify-around items-center gap-4 flex-wrap mt-20 mb-10 text-white bg-gray-800 p-8'>
      <div className='flex flex-col items-center gap-6'>
         <h2 className='text-3xl font-bold'>Contact Us</h2>
         <a href="">Location</a>
         <a href="">Call</a>
         <a href="">Gmail</a>
      </div>
      
      <div className='flex flex-col items-center gap-6'>
       <h2 className='text-3xl font-bold'>Hell Kitchen</h2>
       <p>Welcome to Hell Kitchen, your spot for handcrafted burgers, stone-baked pizzas, and fresh pasta.
            </p>
       <div className='flex flex-row gap-4'>
        <ImWhatsapp className='size-7'/>
        <GrInstagram className='size-7'/>
        <FaFacebook className='size-7'/>
        <ImPinterest2 className='size-7'/>
       </div>
       <p>Tüm hakları saklıdır</p>
      </div>
     
      <div className='flex flex-col items-center gap-3'>
          <h2 className='text-3xl font-bold mb-6'>Opening Hours</h2>
          <p>Everyday</p>
          <p>10.00 Am - 11.00 Pm</p>
      </div>
      
    </section>
  )
}

export default Footer