import Image from "next/image";

const ProductCard = ({ image, title }) => {
  return (
<div
  className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 p-2 
             cursor-pointer transform transition duration-300 
             hover:scale-105"
>
  <div
    className="group bg-amber-600 p-3 rounded-xl shadow-md 
               flex flex-col items-center hover:shadow-lg"
  >
    <Image
      src={image}
      alt={title}
      width={200}
      height={200}
      title={title}
      className="rounded-lg object-cover w-full h-40 transition 
                 duration-300 group-hover:opacity-90"
    />

    <h3
      className="mt-3 text-center font-semibold text-white text-sm sm:text-base 
                 truncate xl:whitespace-normal xl:overflow-visible xl:text-clip"
    >
      {title}
    </h3>
  </div>
</div>

  );
};

export default ProductCard;
