"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';


import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { GiKitchenKnives } from "react-icons/gi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { Mystery_Quest } from "next/font/google";

const mysteryQuest = Mystery_Quest({
  subsets: ["latin"],
  weight: "400",
});


const Navbar = () => {

  

const [isMenu, setisMenu] = useState(false);


const topMenuRef = useRef(null)
const bottomMenuRef = useRef(null)
const hamburgMenuRef =useRef(null)


useEffect(() => { function handleClickOutside(e) {
if(topMenuRef.current && !topMenuRef.current.contains(e.target)&& hamburgMenuRef.current && !hamburgMenuRef.current.contains(e.target)
&& hamburgMenuRef.ref && !bottomMenuRef.current.contains(e.target)){

  setisMenu(false);
}}
  if (isMenu){
    document.addEventListener("mousedown", handleClickOutside)
  }

  return () => {
    document.removeEventListener("mousedown",handleClickOutside)
  }
}, [isMenu]);




  return (
    <section className='flex justify-between items-center bg-gray-900 text-white h-22 lg:h-28 w-full sticky top-0 z-40  relative  '>
        
        <div className='flex flex-row justify-center items-center ml-4 text-amber-400 '>
        <Link className={` ${mysteryQuest.className} lg:ml-8  lg:text-2xl hover:text-amber-200  `} href="/">{"Hell's KITCHEN"}</Link>
        <GiKitchenKnives className='size-16 mt-16 lg:size-20 lg:mt-24 z-20 hover:text-gray-200  text-white' />
        </div>

    {isMenu && (  
<div ref={topMenuRef} className="absolute top-20 left-0 w-full flex flex-col  justify-center items-center gap-4 bg-black text-amber-400 lg:hidden z-20">
  <Link   onClick={() => setisMenu(false)} className='mt-6 hover:text-amber-200 ' href="/">Home</Link>
  <Link   onClick={() => setisMenu(false)} className='hover:text-amber-200 ' href="#menu">Menu</Link>
  <Link   onClick={() => setisMenu(false)} className='hover:text-amber-200 ' href="#about">About</Link>
  <Link   onClick={() => setisMenu(false)} className='mb-6 hover:text-amber-200 ' href="#rezerve">Booktable</Link>
</div>
)} 

<div className="hidden lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center lg:uppercase lg:bg-gray-900 text-amber-400 ">
  <Link  className='hover:text-amber-200 '  href="/">Home</Link>
  <Link  className='hover:text-amber-200 '  href="#menu">Menu</Link>
  <Link  className='hover:text-amber-200 '  href="#about">About</Link>
  <Link  className='hover:text-amber-200 '  href="#rezerve">Booktable</Link>
</div>

{isMenu && (
  <div ref={bottomMenuRef}  className=' absolute top-64 p-4  w-full bg-black flex flex-row justify-center items-center gap-6 lg:hidden z-20'>
  <Link   onClick={() => setisMenu(false)} className='text-amber-400 hover:text-amber-200' href="/login"  ><FaUserAlt className='size-6' /></Link>
  <Link   onClick={() => setisMenu(false)} className='text-amber-400 hover:text-amber-200' href="/login"><RiShoppingCart2Fill className='size-7' /></Link>
   <Link   onClick={() => setisMenu(false)}className='text-amber-400 hover:text-amber-200' href="/login"><IoSearchOutline className='size-7' /></Link>
   <button   onClick={() => setisMenu(false)} className='rounded-2xl md:p-3 p-2 mr-2 bg-amber-400 hover:bg-amber-200 text-gray-900  '>Order Online</button> 
  </div> 
 )}  
   
   <div className=' hidden lg:flex lg:justify-center lg:items-center gap-2 lg:relative lg:bg-gray-900   '>
   <Link className='text-amber-400 hover:text-amber-200' href="/login"><FaUserAlt className='size-6' /></Link>
   <Link className='text-amber-400 hover:text-amber-200' href="/login"><RiShoppingCart2Fill className='size-7' /></Link>
   <Link className='text-amber-400 hover:text-amber-200' href="/login"><IoSearchOutline className='size-7' /></Link>
   <button className='bg-amber-400 hover:bg-amber-200 text-gray-900 rounded-2xl md:p-3 p-2 mr-2 '>Order Online</button> 
  </div>

        <div ref={hamburgMenuRef} onClick={(e)=> setisMenu(!isMenu)}
         className='lg:hidden mr-4'>
          <LiaHamburgerSolid className='size-12 text-amber-400 hover:text-amber-200  hover:cursor-pointer' />
        </div>
    </section>
  )
}

export default Navbar