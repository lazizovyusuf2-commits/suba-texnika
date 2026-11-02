export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  badge?: string;
  short: string;
  description: string;
  image: string;
};

export const categories = [
  "Barchasi",
  "Aksessuar",
  "Audio",
  "Kompyuter",
  "Smartfon",
  "Noutbuk",
  "Televizor",
  "Gaming",
] as const;

export const products: Product[] = [
  {
    id: "usb-c-kabel",
    name: "USB Type-C kabel 1m",
    price: 50000,
    category: "Aksessuar",
    badge: "Start",
    short: "Tez zaryad, mustahkam o‘ram",
    description:
      "1 metrli Type-C kabel. Telefon, planshet va quvvat stansiyalari uchun. Kunlik foydalanishga mos.",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "simli-quloqchin",
    name: "Simli quloqchin",
    price: 65000,
    category: "Audio",
    short: "3.5 mm, aniq ovoz",
    description:
      "Yengil simli quloqchin. Maktab, ish va yo‘l uchun qulay. Mikrofon bilan.",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a5070ee6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ofis-sichqoncha",
    name: "Simsiz ofis sichqonchasi",
    price: 89000,
    category: "Kompyuter",
    short: "2.4 GHz, jim tugmalar",
    description:
      "Kundalik ofis ishi uchun simsiz sichqoncha. Batareya uzoq tutadi, o‘ng va chap qo‘l uchun qulay.",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "flash-64",
    name: "USB flash 64 GB",
    price: 95000,
    category: "Aksessuar",
    short: "Tez o‘qish, metall korpus",
    description:
      "64 GB flash xotira. Hujjat, foto va video ko‘chirish uchun. Metall korpus.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a5804f08d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tws-earbuds",
    name: "TWS Bluetooth quloqchin",
    price: 189000,
    category: "Audio",
    badge: "Hit",
    short: "Sensor boshqaruv, case zaryad",
    description:
      "Simsiz TWS quloqchin. Chaqiruv, musiqa va sport uchun. Case ichida qo‘shimcha zaryad.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "powerbank-10",
    name: "Powerbank 10 000 mAh",
    price: 220000,
    category: "Aksessuar",
    short: "2 chiqish, tez zaryad",
    description:
      "10 000 mAh quvvat banki. Ikki qurilmani bir vaqtda zaryadlash. Yo‘l va ofis uchun.",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5369f3b0c2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mexanik-klaviatura",
    name: "Mexanik klaviatura RGB",
    price: 349000,
    category: "Kompyuter",
    short: "Blue switch, RGB yorug‘lik",
    description:
      "O‘yin va yozish uchun mexanik klaviatura. RGB yoritish, mustahkam korpus.",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "webcam-1080",
    name: "Full HD veb-kamera",
    price: 320000,
    category: "Kompyuter",
    short: "1080p, o‘rnatilgan mikrofon",
    description:
      "Zoom, Telegram va onlayn dars uchun 1080p kamera. Avtofokus va mikrofon.",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wifi-6-router",
    name: "Wi-Fi 6 router",
    price: 590000,
    category: "Kompyuter",
    short: "Tez internet, ko‘p qurilma",
    description:
      "Uy va ofis uchun Wi-Fi 6 router. Barqaror signal, oson sozlash.",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "smart-soat",
    name: "Smart soat AMOLED",
    price: 890000,
    category: "Aksessuar",
    badge: "Yangi",
    short: "Yurak urishi, chaqiruv",
    description:
      "AMOLED ekranli smart soat. Sport rejimlari, bildirishnomalar va chaqiruv.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "planshet-10",
    name: "Planshet 10.1\" 128 GB",
    price: 1890000,
    category: "Smartfon",
    short: "O‘qish, video, ish",
    description:
      "10.1 dyuymli planshet, 128 GB xotira. Darslik, serial va chizish uchun.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "smartfon-128",
    name: "Smartfon 8/128 GB 5G",
    price: 2450000,
    category: "Smartfon",
    badge: "Hit",
    short: "120 Hz, 50 MP kamera",
    description:
      "Kundalik foydalanish uchun 5G smartfon. Tez ekran, yaxshi kamera, katta batareya.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "monitor-27",
    name: "Monitor 27\" 165 Hz",
    price: 3200000,
    category: "Kompyuter",
    short: "IPS, o‘yin va dizayn",
    description:
      "27 dyuym IPS monitor, 165 Hz. O‘yin, montaj va ofis ishi uchun.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "printer-lazer",
    name: "Rangli lazer printer",
    price: 2800000,
    category: "Kompyuter",
    short: "Wi-Fi, ikki tomonlama chop",
    description:
      "Ofis va uy uchun rangli lazer printer. Wi-Fi orqali chop etish.",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "smart-tv-55",
    name: "Smart TV 55\" 4K",
    price: 7500000,
    category: "Televizor",
    short: "Android TV, HDR",
    description:
      "55 dyuym 4K Smart TV. YouTube, kinoteatr ilovalari va HDMI o‘yin.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ps5",
    name: "O‘yin pristavkasi 1 TB",
    price: 8200000,
    category: "Gaming",
    badge: "Cheklangan",
    short: "4K o‘yin, 1 TB SSD",
    description:
      "Zamonaviy o‘yin pristavkasi, 1 TB. 4K, tezkor yuklash, dualsense pult.",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "flagman-smartfon",
    name: "Flagman smartfon 256 GB",
    price: 9800000,
    category: "Smartfon",
    short: "Pro kamera, 120 W zaryad",
    description:
      "Yuqori darajadagi smartfon. Pro kamera tizimi, tezkor zaryad, suvga chidamli.",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "noutbuk-i5",
    name: "Noutbuk i5 16/512",
    price: 9900000,
    category: "Noutbuk",
    badge: "Ofis",
    short: "16 GB RAM, 512 GB SSD",
    description:
      "Ish va o‘qish uchun noutbuk. 16 GB operativ xotira, 512 GB SSD, Full HD ekran.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ultrabook-14",
    name: "Ultrabook 14\" 32/1TB",
    price: 18500000,
    category: "Noutbuk",
    short: "Yengil, uzoq batareya",
    description:
      "Premium ultrabook. 32 GB RAM, 1 TB SSD. Dizayn, kod va biznes uchun.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "oled-tv-75",
    name: "OLED TV 75\" 4K",
    price: 22500000,
    category: "Televizor",
    badge: "Premium",
    short: "OLED, Dolby Atmos",
    description:
      "75 dyuym OLED televizor. Kinoteatr darajasidagi rasm va ovoz. 20 million so‘mdan yuqori premium sinf.",
    image:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gaming-pc-rtx",
    name: "Gaming PC RTX 4070",
    price: 24900000,
    category: "Gaming",
    badge: "Top",
    short: "RTX 4070, 32 GB, RGB",
    description:
      "Yuqori darajadagi o‘yin kompyuteri. RTX 4070, 32 GB RAM, tezkor SSD. 2K/4K o‘yinlar.",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pro-studio-noutbuk",
    name: "Pro studio noutbuk 16\"",
    price: 28900000,
    category: "Noutbuk",
    badge: "Premium",
    short: "Montaj, 3D, AI ishlar",
    description:
      "Professional studio noutbuk. Video montaj, 3D va og‘ir dasturlar uchun. 20 million so‘mdan yuqori.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
