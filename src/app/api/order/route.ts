import { NextResponse } from "next/server";
import { buildOrderMessage, telegramShareUrl, type OrderPayload } from "@/lib/orderMessage";

export async function POST(request: Request) {
  const order = (await request.json()) as OrderPayload;

  if (!order?.name || !order?.phone || !order?.items?.length) {
    return NextResponse.json(
      { ok: false, error: "Ism, telefon va mahsulot kerak." },
      { status: 400 },
    );
  }

  const text = buildOrderMessage(order);
  const fallbackUrl = telegramShareUrl(text);
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });
    const data = (await res.json()) as { ok?: boolean; description?: string };
    if (!data.ok) {
      return NextResponse.json({
        ok: true,
        sent: false,
        fallbackUrl,
        error: data.description,
      });
    }
    return NextResponse.json({ ok: true, sent: true });
  }

  return NextResponse.json({ ok: true, sent: false, fallbackUrl });
}
