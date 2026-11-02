"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatSom } from "@/lib/site";

export function CartDrawer() {
  const { items, open, setOpen, total, setQty, remove } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
        aria-label="Yopish"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0b1220] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-lg font-bold text-white">Savat</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full px-3 py-1 text-sm text-slate-300 hover:bg-white/10"
          >
            Yopish
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-auto px-5 py-4">
          {items.length === 0 && (
            <p className="text-sm text-slate-400">Savat hozircha bo‘sh.</p>
          )}
          {items.map((item) => (
            <div
              key={item.product.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{item.product.name}</p>
                  <p className="text-sm text-cyan-300">{formatSom(item.product.price)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.product.id)}
                  className="text-xs text-rose-300"
                >
                  O‘chirish
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  className="h-8 w-8 rounded-lg bg-white/10 text-white"
                  onClick={() => setQty(item.product.id, item.qty - 1)}
                >
                  −
                </button>
                <span className="w-8 text-center text-white">{item.qty}</span>
                <button
                  type="button"
                  className="h-8 w-8 rounded-lg bg-white/10 text-white"
                  onClick={() => setQty(item.product.id, item.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 p-5">
          <div className="mb-4 flex justify-between text-white">
            <span>Jami</span>
            <span className="font-black">{formatSom(total)}</span>
          </div>
          <Link
            href="/buyurtmalar"
            onClick={() => setOpen(false)}
            className="block rounded-2xl bg-cyan-400 py-3 text-center text-sm font-black text-slate-950"
          >
            Buyurtma berish
          </Link>
        </div>
      </aside>
    </div>
  );
}
