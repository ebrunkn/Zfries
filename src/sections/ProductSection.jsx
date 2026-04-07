import ProductCard from "@/componets/ProductCard";
import products from "@/data/products.json";

const featuredNotes = [
  "Retail-ready presentation",
  "Bold textures and roasted finishes",
  "Mix of nostalgic and modern flavors",
];

export default function ProductSection() {
  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">Product Showcase</span>
            <div className="space-y-4">
              <h2 className="section-title max-w-xl text-[#fff2cb]">
                A snack catalog shaped like a brand, not just a menu.
              </h2>
              <p className="section-copy max-w-lg">
                From popcorn signatures to savory mixes, Z-Fries can present a broad collection while
                still feeling visually consistent, premium, and easy to explore.
              </p>
            </div>

            <div className="glass-panel rounded-[2rem] border p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-white/45">Design Direction</p>
              <ul className="mt-4 space-y-3 text-sm text-white/72">
                {featuredNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#ffd56f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
            {products.map((item, index) => (
              <ProductCard key={`${item.title}-${index}`} image={item.image} title={item.title} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
