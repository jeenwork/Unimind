import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-zinc-900 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/techwear-hero/1920/1080" 
          alt="Model wearing Unimind techwear in a brutalist architectural setting" 
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-white backdrop-blur-md mb-6 uppercase">
                System 01 / Drop
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                Engineered for the Unpredictable.
              </h1>
              <p className="text-lg text-zinc-300 mb-8 max-w-lg">
                Minimalist tech-wear that adapts to your environment. High-performance fabrics, zero compromises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/product/unimind-aero-jacket" 
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105 active:scale-95"
                >
                  Shop the Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-zinc-900 font-bold">01</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Adaptive Textiles</h3>
              <p className="text-sm text-zinc-600">Fabrics that respond to your body heat and environmental changes instantly.</p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-zinc-900 font-bold">02</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Minimalist Utility</h3>
              <p className="text-sm text-zinc-600">Hidden pockets and articulated joints. Maximum function without the tactical look.</p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-zinc-900 font-bold">03</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Sustainable Core</h3>
              <p className="text-sm text-zinc-600">Built to last decades, not seasons. Utilizing recycled aerospace-grade materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (PLP snippet) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900">Essential Gear</h2>
              <p className="text-zinc-500 mt-2">The foundation of your urban uniform.</p>
            </div>
            <Link to="/" className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-900 hover:underline underline-offset-4">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
