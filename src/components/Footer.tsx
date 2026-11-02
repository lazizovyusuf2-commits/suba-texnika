import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#05080f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-black tracking-[0.14em] text-white">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Zamonaviy texnika: aksessuardan premium noutbuk va televizorgacha. Narxlar
            50 000 so‘mdan boshlanadi, 20 000 000 so‘mdan yuqori mahsulotlar ham bor.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Bo‘limlar
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Aloqa
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
            <a href={site.telegramHref} className="hover:text-white">
              Telegram @{site.telegram}
            </a>
            <a href={site.instagramHref} className="hover:text-white">
              Instagram @{site.instagram}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 {site.name}. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
