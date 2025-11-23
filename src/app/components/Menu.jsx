import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { Dancing_Script } from "next/font/google";
import {products} from "@/data/product"

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});




const Menu = () => {


const [selectedCategory, setSelectedCategory] = useState("All");

const FilteredProducts = selectedCategory === "All"
  ? products
  : products.filter(p=>p.category === selectedCategory)

const categories = ["All","Burger","Pizza","Pasta","Fries"]



  return (
    <div id='menu' className='text-center mt-24 w-full'>
         <h2 className={`${dancing.className}  text-6xl`  }>Our Menu</h2>
       <div className='flex justify-center items-center gap-4  w-fit h-fit m-auto rounded-2xl bg-amber-400   lg:gap-20 mt-16'>
        {categories.map(cate=>( 
       <button
       key={cate}
       onClick={()=>setSelectedCategory(cate)}
       className={`w-16 p-2 rounded-2xl text-white 
        ${selectedCategory === cate ?"bg-gray-700 duration-500" : "bg-amber-400"}
        `}
       
       
       >{cate}</button>

        ))}
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14   '>
      {FilteredProducts.map(item=>(
      <MenuItem
      key={item.id}
      img={item.img}
      title={item.title}
      desc={item.desc}
      price={item.price}
      
      />


      ))}
       
       
       </div>
     
       <button className='bg-amber-400 text-white rounded-2xl p-2 mt-8'>View More...</button>

    </div>
  )
}

export default Menu