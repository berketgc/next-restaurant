import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = ({ img, title, desc, price }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full max-w-sm m-auto bg-gray-600">
      
  
      <div className="relative w-full h-60 ">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-bl-4xl border-b-2 border-white hover:scale-110 duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 text-center ">
        <h2 className="text-3xl font-bold hover:underline hover:cursor-pointer text-white hover:text-amber-400">{title}</h2>
        <p className="text-gray-300 mt-6">{desc}</p>
        <div className="flex justify-between items-center mt-6 p-2">
          <p className=" text-white text-xl ">{price} $</p>
          <div className="bg-amber-400 p-2 rounded-full ">
          <RiShoppingCart2Fill size={20} className="text-white   cursor-pointer"/>
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default MenuItem;
