import { Link } from "react-router-dom";
import { Product } from "../data/products";
import React from "react";

export default function ProductCard({ product }: { product: Product; key?: React.Key }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100 mb-4">
        <img
          src={product.images[0]}
          alt={product.altTexts[0]}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
          <p className="text-sm text-zinc-500 mt-1">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-zinc-900">${product.price}</p>
      </div>
    </Link>
  );
}
