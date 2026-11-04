// app/api/prices/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const bot_token = process.env.bot_api;
  const chat_id = process.env.chat_id;

  console.log("bot_token:", bot_token ? "Loaded Successfully" : "MISSING");
  console.log("chat_id:", chat_id ? "Loaded Successfully" : "MISSING");

  if (!bot_token || !chat_id) {
    return NextResponse.json({ success: false, error: "Configuration environment tokens missing" }, { status: 500 });
  }

  try {
    // 1. (Optional) Parse incoming payload variables from your landing page frontend form submission if available
    let messageText = "🔔 **New Alert Inbound**\nHello from your Next.js application!";
    
    try {
      const incomingBody = await request.json();
      if (incomingBody?.text) {
        messageText = incomingBody.text;
      }
    } catch (e) {
      // No request body parsed, falls back to default string notification cleanly
    }

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
    
    // 2. CORRECTION: Pass method and body on the root options block, NOT inside headers
    const response = await fetch(url, {
      method: "POST", // Telegram requires POST to process body inputs
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Next.js Application Backend Node)"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageText,
        parse_mode: "Markdown" // Enables clean font formatting bold layout stars
      }),
      signal: AbortSignal.timeout(5000) // Instantly interrupts if requests hang > 5 seconds
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram endpoint rejected payload details:", errorData);
      return NextResponse.json({ success: false, reason: "Telegram node failure response" });
    }

    const responseData = await response.json();
    return NextResponse.json({ success: true, data: responseData });

  } catch (error) {
    console.error("Intercepted exception inside execution pipeline handle route:", error);
    return NextResponse.json({ success: false, error: "Internal processing crash exception intercepted" }, { status: 500 });
  }
}
