import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="bg-gray-700 flex justify-center items-center gap-6 w-full mt-10 py-6">
        <div className="relative w-80 h-[500px] lg:w-[400px] lg:[h-700px]">
         <Image src={"/images/about2.png"} alt="hamburger" fill/>
        </div>
        <div className="text-white flex flex-col text-center gap-3 w-1/3 mr-10 md:m-0">
            <h2 className="text-xl lg:text-4xl font-bold">About Us</h2>
            <p className="lg:text-2xl text-center">Welcome to Hell Kitchen, your spot for handcrafted burgers, stone-baked pizzas, and fresh pasta.
             We use quality ingredients, simple recipes, and lots of passion to create meals that feel good and taste even better. </p>
            <button className="bg-amber-400 p-2 rounded-2xl mt-4 lg:mt-10 lg:w-40 w-28 m-auto lg:text-2xl">Read more</button>
        </div>



    </section>
  )
}

export default About