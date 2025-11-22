"use client";  
import Image from "next/image";
import Campaing from "./components/Campaing";
import Menu from "./components/Menu";
import About from "./components/About";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Mystery_Quest } from "next/font/google";

const mystery = Mystery_Quest({
  subsets: ["latin"],
  weight: "400",
})


export default function Home() {

  return (

    <div>
    <div className="relative w-full h-screen">

      <Image 
        src={"/images/burger-with-fries.jpg"}
        alt="Kitchen Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="-z-10"
      />
        
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/3 lg:left-1/4 z-10 w-11/12 lg:w-1/4 p-8 bg-black/40 rounded-3xl text-center">
        <h1 className="lg:text-4xl text-2xl text-white font-bold mb-4">Welcome To The <span className={`${mystery.className} text-amber-400`}>Kitchen</span></h1>
        <p className="text-white mb-4">Join us for an unforgettable dining experience, where quality, taste, and ambiance come together perfectly.</p>
        <button className="bg-amber-400 text-white p-2 rounded-2xl mt-2 lg:mt-4">Order Now</button>
      </div>
 
    </div>
        <Campaing/>
        <Menu/>
        <About/>
        <Form/>
        
          <Footer/>
    </div>
  );
}
