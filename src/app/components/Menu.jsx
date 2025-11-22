import React from 'react'
import MenuItem from './MenuItem'
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});


const Menu = () => {
  return (
    <div id='menu' className='text-center mt-24 w-full'>
         <h2 className={`${dancing.className}  text-6xl`  }>Our Menu</h2>
       <div className='flex justify-center items-center gap-20 mt-12'>
      
        <a href="">Burger</a>
        <a href="">Pizza</a>
        <a href="">Pasta</a>
        <a href="">Fries</a>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14   '>
       <MenuItem
       img={"/images/pizza1.jpg"}
       title={"Mixed Pizza"}
       desc= {"A combination of meats, veggies, and cheese"}
       price={"20"}
       />

        <MenuItem
       img={"/images/burger.jpg"}
       title={"Classic Burger"}
       desc= {"Juicy beef patty with fresh lettuce, tomato, onions, and our special sauce"}
       price={"10"}
       />

         <MenuItem
       img={"/images/fries.jpg"}
       title={"French Fries"}
       desc= {"Crispy golden fries, lightly salted and perfectly cooked"}
       price={"7"}
       />
        <MenuItem
       img={"/images/pasta.jpg"}
       title={"Tomato Sauce Pasta"}
       desc= {"Classic pasta tossed in rich tomato sauce"}
       price={"12"}
       />
        <MenuItem
       img={"/images/burger2.jpg"}
       title={"Chicken Burger"}
       desc= {"Grilled or fried chicken breast, crisp lettuce, tomato, and creamy mayo"}
       price={"8"}
       />
        <MenuItem
       img={"/images/pizza2.jpg"}
       title={"Vegetarian Pizza"}
       desc= {"Loaded with fresh vegetables and mozzarella"}
       price={"18"}
       />
        <MenuItem
       img={"/images/pasta2.jpg"}
       title={"Mushroom Pasta"}
       desc= {"Creamy mushroom sauce with fresh herbs"}
       price={"15"}
       />
       
        <MenuItem
       img={"/images/pasta3.jpg"}
       title={"Pesto Pasta"}
       desc= {"Penne with homemade basil pesto sauce"}
       price={"10"}
       />
        <MenuItem
       img={"/images/chicken.jpg"}
       title={"Chicken Wings"}
       desc= {"Spicy and tender chicken wings, served with your choice of dipping sauce"}
       price={"12"}
       />

       
       
       </div>
     
       <button className='bg-amber-400 text-white rounded-2xl p-2 mt-14'>View More...</button>

    </div>
  )
}

export default Menu