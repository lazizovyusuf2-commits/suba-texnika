import { site } from "@/lib/site";

const faqs = [
  {
    q: "Qanday buyurtma beraman?",
    a: "Mahsulotni savatga qo‘shing, Buyurtmalar bo‘limida ism, telefon va manzilni yozing. Xabar Telegramga yuboriladi.",
  },
  {
    q: "Narxlar qanday?",
    a: "Eng arzon tovar 50 000 so‘m. Premium televizor, gaming PC va studio noutbuklar 20 000 000 so‘mdan yuqori.",
  },
  {
    q: "Yetkazib berish bormi?",
    a: "Ha. Manzilni buyurtmada yozing — operator Telegram orqali tasdiqlaydi.",
  },
  {
    q: "To‘lov qachon?",
    a: "Buyurtma tasdiqlangach. Usulni operator bilan kelishasiz.",
  },
  {
    q: "Kafolat bormi?",
    a: "Ha. Har bir mahsulot bo‘yicha kafolat muddati buyurtma paytida aytiladi.",
  },
];

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-black text-white">Yordam</h1>
      <p className="mt-3 text-slate-400">
        Tez-tez so‘raladigan savollar va aloqa. Javob topilmasa — to‘g‘ridan-to‘g‘ri yozing.
      </p>
      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 open:border-cyan-400/40"
          >
            <summary className="cursor-pointer font-bold text-white">{item.q}</summary>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-12 rounded-3xl border border-white/10 bg-[#0b1220] p-8">
        <h2 className="text-2xl font-black text-white">Aloqa</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>
            Telefon:{" "}
            <a className="text-cyan-300" href={site.phoneHref}>
              {site.phone}
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a className="text-cyan-300" href={site.telegramHref}>
              @{site.telegram}
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a className="text-cyan-300" href={site.instagramHref}>
              @{site.instagram}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
