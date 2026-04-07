import Image from "next/image";

const ProductCard = ({ image, title, index }) => {
  const accentPalette = [
    "from-[#ffe395]/30 to-transparent",
    "from-[#ffb85c]/30 to-transparent",
    "from-[#f7f1d0]/25 to-transparent",
  ];

  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-3.5 shadow-[0_26px_60px_rgba(16,4,4,0.18)] backdrop-blur-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentPalette[index % accentPalette.length]} opacity-80`} />
      <div className="relative flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#fff7e6]/92 p-4 md:p-5">
          <div className="absolute inset-x-8 top-2 h-16 rounded-full bg-[#ffc84d]/22 blur-2xl" />
          <Image
            src={image}
            alt={title}
            width={320}
            height={320}
            title={title}
            className="mx-auto aspect-[1.08/1] h-auto w-full max-w-[15rem] object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative px-2 pb-2 pt-4">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/46">Signature Snack</p>
          <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-[#fff7db]">{title}</h3>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
