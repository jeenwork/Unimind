export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold tracking-tighter mb-4">UNIMIND</h3>
          <p className="text-sm max-w-md">
            Minimalist tech-wear engineered for the modern urban explorer. 
            Sustainable basics that adapt to your environment.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Outerwear</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Basics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bottoms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Stylist</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-800 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Unimind. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
