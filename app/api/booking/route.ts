import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
🔔 *YENİ STRATEJİ GÖRÜŞMESİ TALEBİ*
━━━━━━━━━━━━━━━━━━━━
👤 *İsim:* ${data.name}
📱 *Telefon:* ${data.phone}
📧 *E-posta:* ${data.email || "Belirtilmedi"}
🏢 *İşletme:* ${data.business}
🏷️ *Sektör:* ${data.sector}
📅 *Tarih:* ${data.date}
🕐 *Saat:* ${data.time}
━━━━━━━━━━━━━━━━━━━━
⚡ *Hemen arayın ve kapatın!*
  `.trim();

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) throw new Error("Telegram API hatası");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram bildirim hatası:", error);
    // Hata olsa bile 200 dön — müşteri deneyimini bozma
    return NextResponse.json({ success: true });
  }
}
