"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function AddButton({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      onClick={() => add(product)}
      className="mt-8 rounded-full bg-cyan-400 px-8 py-3 text-sm font-black text-slate-950"
    >
      Savatga qo‘shish
    </button>
  );
}
