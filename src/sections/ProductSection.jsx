import products from "@/data/products.json";
import ProductCard from "@/componets/ProductCard";

export default function ProductSection() {
  return (
    <section className="flex justify-center p-5">
      <div className=" container flex">
        <div className="flex flex-wrap justify-center">
          {products.map((item, index) => (
            <ProductCard key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
