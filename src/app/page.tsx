import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { site } from "@/lib/site";

export default function Home() {
  const featured = products.filter((p) =>
    ["Hit", "Premium", "Top", "Yangi"].includes(p.badge ?? ""),
  );
  const starters = products.filter((p) => p.price <= 250000).slice(0, 4);

  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            SUBA TEXNIKA MARKET
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
            Zamonaviy texnika.
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              50 mingdan premiumgacha.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Aksessuar, audio, smartfon, noutbuk, televizor va gaming qurilmalari.
            Narxlar 50 000 so‘mdan boshlanadi. Premium tovarlar 20 000 000 so‘mdan
            yuqori.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/mahsulotlar"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950"
            >
              Katalogni ochish
            </Link>
            <Link
              href="/buyurtmalar"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white"
            >
              Buyurtma berish
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              ["50 000+", "so‘mdan start"],
              ["20 mln+", "premium sinf"],
              ["24/7", "Telegram aloqa"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-lg font-black text-white sm:text-2xl">{n}</p>
                <p className="text-xs text-slate-400">{t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-900 p-8 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Biz haqimizda</p>
          <h2 className="mt-3 text-3xl font-black text-white">SUBA TEXNIKA</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Biz zamonaviy texnika savdosi bilan shug‘ullanamiz. Mijoz buyurtma
            bersa, xabar darhol Telegram orqali keladi. Yetkazib berish, kafolat
            va maslahat — bitta joyda.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white">
            <p>Tel: {site.phone}</p>
            <p>Telegram: @{site.telegram}</p>
            <p>Instagram: @{site.instagram}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black text-white">Tanlangan mahsulotlar</h2>
            <p className="text-sm text-slate-400">Hit va premium tovarlar</p>
          </div>
          <Link href="/mahsulotlar" className="text-sm font-semibold text-cyan-300">
            Barchasi →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="mb-8 text-2xl font-black text-white">50 000 so‘mdan start</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {starters.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
