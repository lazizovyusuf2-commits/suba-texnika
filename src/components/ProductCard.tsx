"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatSom } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-1 hover:border-cyan-400/40">
      <Link href={`/mahsulotlar/${product.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
          {product.category}
        </p>
        <Link href={`/mahsulotlar/${product.id}`} className="block text-lg font-bold text-white">
          {product.name}
        </Link>
        <p className="text-sm text-slate-400">{product.short}</p>
        <div className="flex items-center justify-between gap-3">
          <p className="font-black text-cyan-300">{formatSom(product.price)}</p>
          <button
            type="button"
            onClick={() => add(product)}
            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-300"
          >
            Savatga
          </button>
        </div>
      </div>
    </article>
  );
}
