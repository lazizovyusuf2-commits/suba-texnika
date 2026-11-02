import { site } from "@/lib/site";

const services = [
  {
    title: "Yetkazib berish",
    text: "Shahar bo‘ylab tez yetkazib berish. Viloyatlarga transport orqali yuboramiz. Katta texnika uchun o‘rnatish yordami.",
  },
  {
    title: "Rasmiy kafolat",
    text: "Har bir mahsulotga kafolat. Nosozlik chiqsa — almashtirish yoki ta’mirlash bo‘yicha yo‘l-yo‘riq beramiz.",
  },
  {
    title: "Maslahat",
    text: "Byudjetingizga qarab tovar tanlaymiz: 50 000 so‘mlik kabeldan 20 milliondan yuqori noutbukgacha.",
  },
  {
    title: "Buyurtma Telegramda",
    text: "Saytdan buyurtma qilsangiz, xabar Telegramga tushadi. Operator tez orada qo‘ng‘iroq qiladi.",
  },
  {
    title: "To‘lov",
    text: "Naqd, karta yoki kelishuv asosida. Katta summalar uchun oldindan to‘lov mumkin.",
  },
  {
    title: "Servis",
    text: "O‘rnatish, sozlash, Wi-Fi va televizor ulash bo‘yicha yordam. Savol bo‘lsa — yozing.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-black text-white">Xizmatlar</h1>
      <p className="mt-3 max-w-2xl text-slate-400">
        SUBA TEXNIKA nafaqat sotadi — yetkazadi, maslahat beradi va buyurtmani
        Telegram orqali qabul qiladi.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h2 className="text-xl font-black text-white">{s.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">{s.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8">
        <h2 className="text-2xl font-black text-white">Biz haqimizda</h2>
        <p className="mt-4 max-w-3xl text-slate-300 leading-7">
          {site.name} — zamonaviy texnikalar savdosi. Mijozlarga qulay narx,
          ochiq aloqa va tez javob muhim. Savol bo‘lsa Telegram yoki telefon
          orqali bog‘laning.
        </p>
        <p className="mt-4 text-sm text-cyan-200">
          {site.phone} · @{site.telegram} · @{site.instagram}
        </p>
      </div>
    </div>
  );
}
