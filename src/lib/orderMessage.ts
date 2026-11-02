import { formatSom, site } from "@/lib/site";

export type OrderPayload = {
  name: string;
  phone: string;
  address: string;
  note?: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
};

export function buildOrderMessage(order: OrderPayload) {
  const lines = [
    `Yangi buyurtma — ${site.name}`,
    "",
    `Ism: ${order.name}`,
    `Telefon: ${order.phone}`,
    `Manzil: ${order.address}`,
    order.note ? `Izoh: ${order.note}` : "",
    "",
    "Mahsulotlar:",
    ...order.items.map(
      (item) =>
        `• ${item.name} × ${item.qty} = ${formatSom(item.price * item.qty)}`,
    ),
    "",
    `Jami: ${formatSom(order.total)}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export function telegramShareUrl(text: string) {
  return `https://t.me/${site.telegram}?text=${encodeURIComponent(text)}`;
}
