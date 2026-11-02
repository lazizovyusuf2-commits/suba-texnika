"use client";

import { useMemo, useState } from "react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Barchasi");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return products.filter((p) => {
      const okCat = cat === "Barchasi" || p.category === cat;
      const okQ = p.name.toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [cat, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-black text-white">Mahsulotlar</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        50 000 so‘mdan 28 900 000 so‘mgacha. Kerakli toifani tanlang yoki qidiring.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              cat === c ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Mahsulot qidirish..."
        className="mt-6 w-full max-w-md rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-10 text-slate-400">Hech narsa topilmadi.</p>
      )}
    </div>
  );
}
