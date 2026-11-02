"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { useCart } from "@/context/CartContext";

export function Header() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
            ST
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black tracking-[0.18em] text-white">
              {site.name}
            </span>
            <span className="block text-xs text-cyan-300/80">{site.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden rounded-full border border-cyan-400/40 px-3 py-2 text-xs font-semibold text-cyan-200 sm:inline"
          >
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950"
          >
            Savat
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-rose-500 px-1 text-[11px] text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
            onClick={() => setMenu((v) => !v)}
            aria-label="Menyu"
          >
            ☰
          </button>
        </div>
      </div>
      {menu && (
        <div className="border-t border-white/10 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
