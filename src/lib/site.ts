export const site = {
  name: "SUBA TEXNIKA",
  tagline: "Zamonaviy texnikalar savdosi",
  phone: "+998996776769",
  phoneHref: "tel:+998996776769",
  telegram: "Isko_mlrdr",
  telegramHref: "https://t.me/Isko_mlrdr",
  instagram: "vx_isko",
  instagramHref: "https://instagram.com/vx_isko",
  city: "O‘zbekiston",
};

export const nav = [
  { href: "/", label: "Asosiy" },
  { href: "/mahsulotlar", label: "Mahsulotlar" },
  { href: "/xizmatlar", label: "Xizmatlar" },
  { href: "/buyurtmalar", label: "Buyurtmalar" },
  { href: "/yordam", label: "Yordam" },
];

export function formatSom(amount: number) {
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${grouped} so‘m`;
}
