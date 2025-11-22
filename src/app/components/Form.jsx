"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




export default function Form() {
  return (
    <section id="rezerve" className="mt-20 flex flex-wrap justify-center items-center lg:gap-20 p-4">
      
      <div className="flex flex-col justify-center items-center gap-6">
      <h2 className="text-3xl mb-6 text-gray-800">Reservation</h2>

      <Input
        placeholder="Your Name"
        type="text"
        className="border-2 border-gray-800 text-black"
      />
      <Input
        placeholder="Phone Number"
        type="text"
        className="border-2 border-gray-800 text-black"
      />
      <Input
        placeholder="Your Email"
        type="email"
        className="border-2 border-gray-800 text-black"
      />

      <Select>
        <SelectTrigger className="w-[300px] border-2 border-gray-800 text-black">
          <SelectValue placeholder="How many Persons?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectContent>
      </Select>

       <Input
        placeholder="booking date"
        type="datetime-local"
        className="border-2 border-gray-800 text-black"
      />

      <button className="bg-amber-400 text-white p-2 rounded-2xl mt-4 ">Book now</button>
      </div>

      <div className=" mt-6">
        <iframe className="rounded-2xl  w-full max-w-[500px] h-[300px] md:h-[400px] md:w-[600px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8552.972277907753!2d-74.0394791721338!3d40.71950575057074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1763465623181!5m2!1str!2str"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
         
     
      
    </section>
  )
}
