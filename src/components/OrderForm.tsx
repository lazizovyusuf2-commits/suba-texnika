"use client";

import { FormEvent, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatSom, site } from "@/lib/site";
import { buildOrderMessage, telegramShareUrl } from "@/lib/orderMessage";

export function OrderForm() {
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) {
      setStatus("err");
      setMessage("Avval savatga mahsulot qo‘shing.");
      return;
    }

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      address: String(form.get("address") ?? "").trim(),
      note: String(form.get("note") ?? "").trim(),
      items: items.map((item) => ({
        name: item.product.name,
        qty: item.qty,
        price: item.product.price,
      })),
      total,
    };

    setStatus("loading");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        sent?: boolean;
        fallbackUrl?: string;
        error?: string;
      };

      const text = buildOrderMessage(payload);
      const url = data.fallbackUrl || telegramShareUrl(text);

      if (data.sent) {
        setStatus("ok");
        setMessage("Buyurtma Telegramga yuborildi. Tez orada bog‘lanamiz.");
        clear();
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("ok");
      setMessage(
        "Telegram ochildi. Xabarni yuboring — buyurtma @Isko_mlrdr ga yetadi.",
      );
      clear();
    } catch {
      setStatus("err");
      setMessage("Xatolik. Telegram yoki telefon orqali yozing.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
      >
        <h2 className="text-xl font-black text-white">Buyurtma formasi</h2>
        <input
          name="name"
          required
          placeholder="Ismingiz"
          className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none"
        />
        <input
          name="phone"
          required
          placeholder="Telefon raqam"
          defaultValue="+998"
          className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none"
        />
        <input
          name="address"
          required
          placeholder="Yetkazish manzili"
          className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none"
        />
        <textarea
          name="note"
          rows={4}
          placeholder="Izoh (ixtiyoriy)"
          className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-2xl bg-cyan-400 py-3 text-sm font-black text-slate-950 disabled:opacity-60"
        >
          {status === "loading" ? "Yuborilmoqda..." : "Telegramga yuborish"}
        </button>
        {message && (
          <p className={status === "err" ? "text-sm text-rose-300" : "text-sm text-cyan-200"}>
            {message}
          </p>
        )}
      </form>

      <aside className="rounded-3xl border border-white/10 bg-[#0b1220] p-6">
        <h2 className="text-xl font-black text-white">Savatdagi tovarlar</h2>
        <div className="mt-4 space-y-3">
          {items.length === 0 && (
            <p className="text-sm text-slate-400">Savat bo‘sh. Katalogdan tanlang.</p>
          )}
          {items.map((item) => (
            <div key={item.product.id} className="flex justify-between gap-3 text-sm">
              <span className="text-slate-200">
                {item.product.name} × {item.qty}
              </span>
              <span className="text-cyan-300">
                {formatSom(item.product.price * item.qty)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between border-t border-white/10 pt-4 font-black text-white">
          <span>Jami</span>
          <span>{formatSom(total)}</span>
        </div>
        <p className="mt-6 text-xs leading-5 text-slate-500">
          Buyurtma @{site.telegram} ga Telegram orqali ketadi. Telefon: {site.phone}
        </p>
      </aside>
    </div>
  );
}
