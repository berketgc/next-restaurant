import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";

const CampaignItem = ({ img, discount, title }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-4 bg-gray-700 p-6 rounded-2xl w-full md:w-96 lg:w-2/3 mt-14">
      <div className="relative w-36 h-36 lg:w-48 lg:h-48 border-4 border-amber-500 rounded-full p-3 overflow-hidden ">
        <Image
          className="hover:scale-110 duration-300 rounded-full"
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="text-white flex flex-col gap-2 justify-center items-center lg:items-start text-center lg:text-left mt-4 lg:mt-0 lg:ml-6 px-2">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p>{discount}</p>
        <button className="bg-amber-400 p-3 rounded-2xl flex items-center gap-2 mt-4">
          Order Now <RiShoppingCart2Fill className="size-7" />
        </button>
      </div>
    </section>
  );
};

const Campaign = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 p-4 ">
      <CampaignItem
        img="/images/pizza.jpg"
        title="Pizza Campaign"
        discount="Save 20%"
      />
      <CampaignItem
        img="/images/wing.jpg"
        title="Chicken Campaign"
        discount="Save 15%"
      />
    </div>
  );
};

export default Campaign;
