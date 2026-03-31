import { Search, ShoppingBag, Menu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 -ml-2 text-zinc-600 hover:text-zinc-900">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900">
            UNIMIND
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">New Arrivals</Link>
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Outerwear</Link>
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Basics</Link>
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Accessories</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-zinc-200 bg-zinc-50 overflow-hidden"
          >
            <div className="mx-auto max-w-3xl px-4 py-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask anything (e.g., 'What should I wear to a rainy outdoor wedding?')"
                  className="w-full rounded-full border border-zinc-300 bg-white py-4 pl-12 pr-12 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-all shadow-sm"
                  autoFocus
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-100 rounded-full text-zinc-600 hover:bg-zinc-200 transition-colors">
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Trending:</span>
                <button className="text-xs text-zinc-600 bg-zinc-200/50 px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors">Waterproof jackets</button>
                <button className="text-xs text-zinc-600 bg-zinc-200/50 px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors">Travel pants</button>
                <button className="text-xs text-zinc-600 bg-zinc-200/50 px-2 py-1 rounded-md hover:bg-zinc-200 transition-colors">Odor-resistant tees</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
