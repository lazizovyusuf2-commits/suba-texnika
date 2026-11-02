import { OrderForm } from "@/components/OrderForm";
import { site } from "@/lib/site";

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-black text-white">Buyurtmalar</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        Savatni to‘ldiring, ma’lumotni yozing — buyurtma Telegram orqali{" "}
        <a className="text-cyan-300" href={site.telegramHref}>
          @{site.telegram}
        </a>{" "}
        ga yuboriladi.
      </p>
      <div className="mt-10">
        <OrderForm />
      </div>
    </div>
  );
}
