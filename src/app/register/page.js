"use client";
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"


export default function Register(){

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [error, setError] = useState("")

const handleRegister= (e) => {

      e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    if (!email) {
        return setError("Email boş bırakılamaz")
    }
    
     if (!/\S+@\S+\.\S+/.test(email)) {
      return setError("Geçerli bir email adresi yaz.");
    }
    
    if (password.length < 8) {
      return setError("Şifre en az 8 karakter olmalı.");
    }

    setError("");
    console.log("kayıt başarılı", {email,password});
    setEmail("");
  setPassword("");
 
};






    return(
    <section className="flex flex-col justify-center items-center h-full w-2/4  m-auto bg-gray-200 text-white" 
     style={{ backgroundImage: "url('/images/white.jpg')" }} > 
          <h1 className=" text-center mb-30 text-[20px] text-amber-400 lg:text-3xl   lg:font-extrabold  bg-white p-1 rounded-xs">Be a member our delicious kitchen</h1>
    <form onSubmit={handleRegister}>
      <div className="rounded-3xl p-4  bg-amber-400 ">
      
        <div className="flex flex-col gap-2 ">
           <Label htmlFor="email">Email</Label>
            <Input  onChange={(e) => setEmail(e.target.value)} id="email" name="email" value={email}  className="border-2 border-gray-800" type="email"></Input>
            <Label htmlFor="password">Password</Label>
            <Input   onChange={(e) => setPassword(e.target.value)} id="password" name="password"  value={password} className="border-2 border-gray-800" type="password"></Input>
        </div>
      
      
        {error && (
          <p className="text-red-700 bg-white p-1 rounded mt-3 text-center text-sm">
            {error}
          </p>
        )}

        <div className=" flex flex-col justify-center items-center gap-2 mt-7 ">
            <button  type="submit" className="p-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-400">Register</button>
            <p className="text-sm mt-2">Already have an account ? <Link className="hover:underline text-[14px] text-sky-600 " href="/login"> Login</Link></p>


        </div>


</div>  
</form>
 
    </section>


    )
}