import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Check, ChevronRight, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PDP() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  // Simulate real-time social proof
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSocialProof(true);
      setTimeout(() => setShowSocialProof(false), 5000);
    }, 3000);
    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([50, 50, 50]);
    }

    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <main className="flex-1 bg-white pb-24 lg:pb-0">
      {/* Social Proof Toast */}
      <AnimatePresence>
        {showSocialProof && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-20 left-1/2 z-50 flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-2 text-sm text-white shadow-xl"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
              <Check className="h-3 w-3 text-white" />
            </div>
            <span>Someone in New York just purchased this.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <a href="/" className="hover:text-zinc-900">Home</a>
          <ChevronRight className="h-4 w-4" />
          <a href="/" className="hover:text-zinc-900">{product.category}</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-zinc-900 font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full lg:w-24 shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-[4/5] w-20 lg:w-full shrink-0 overflow-hidden rounded-md bg-zinc-100 ${
                    selectedImage === idx ? 'ring-2 ring-zinc-900 ring-offset-2' : 'ring-1 ring-zinc-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.altTexts[selectedImage]} 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-2 sm:px-0 lg:mt-0">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-zinc-900">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm text-zinc-500">(128 Reviews)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-zinc-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-medium text-zinc-900">${product.price}</p>
            </div>

            <div className="mb-8">
              <p className="text-base text-zinc-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-zinc-900">Size</h3>
                <button className="text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-900">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center rounded-md border py-3 text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-zinc-900 bg-zinc-900 text-white'
                        : 'border-zinc-200 bg-white text-zinc-900 hover:border-zinc-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Add to Cart */}
            <div className="hidden lg:block mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full rounded-full py-4 px-8 text-base font-semibold text-white transition-all ${
                  isAdding ? 'bg-green-600' : 'bg-zinc-900 hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {isAdding ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <p className="text-center text-xs text-zinc-500 mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Secure checkout. Free shipping over $150.
              </p>
            </div>

            {/* Features List */}
            <div className="border-t border-zinc-200 pt-8 mb-8">
              <h3 className="text-sm font-medium text-zinc-900 mb-4 uppercase tracking-wider">Technical Specs</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-100">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-200 pt-8">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-zinc-400" />
                <span className="text-sm text-zinc-600">Fast Global Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-zinc-400" />
                <span className="text-sm text-zinc-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Buy Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white p-4 pb-safe lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="flex gap-4 max-w-md mx-auto">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex-1 rounded-full py-3.5 px-6 text-sm font-semibold text-white transition-all ${
              isAdding ? 'bg-green-600' : 'bg-zinc-900 active:scale-[0.98]'
            }`}
          >
            {isAdding ? 'Added to Cart' : `Add to Cart - $${product.price}`}
          </button>
        </div>
      </div>
    </main>
  );
}
