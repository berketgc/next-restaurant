import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full  w-2/4  m-auto bg-gray-200 text-white" 
     style={{ backgroundImage: "url('/images/white.jpg')" }} > 
          <h1 className=" text-center mb-30 text-[30px] text-amber-400 text-3xl font-extrabold bg-white p-1 rounded-xs">Welcome to Our Kitchen</h1>

      <div className="rounded-3xl p-4 bg-amber-400 mb-24">
      
        <div className="flex flex-col gap-2">
           <Label htmlFor="email">Email</Label>
            <Input required className="border-2 border-gray-800" type="email"></Input>
            <Label  htmlFor="password">Password</Label>
            <Input required className="border-2 border-gray-800" type="password"></Input>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2 mt-7 ">
            <button className="p-2 bg-gray-800 text-white rounded-2xl  hover:bg-gray-400">Login</button>
            <p className="text-sm mt-2">Dont have a account ? <Link className="hover:underline text-[14px] text-sky-600 " href="/register">Register</Link></p>


        </div>


</div>  
 
    </section>
  )
}

export default Page