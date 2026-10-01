import { NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req) {
  try {
    const { messages, model, apiKey, temperature, max_tokens, systemPrompt } = await req.json();

    if (!apiKey) return NextResponse.json({ ok: false, message: "API key kosong" }, { status: 400 });
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ ok: false, message: "Pesan kosong" }, { status: 400 });
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        // Model lama (llama-3.3-70b-versatile dkk) sudah dihentikan Groq, default diganti
        model: model || "openai/gpt-oss-120b",
        messages: [
          { role: "system", content: systemPrompt || "Kamu adalah AI asisten yang ramah." },
          ...messages,
        ],
        temperature: temperature ?? 0.7,
        max_tokens: max_tokens ?? 1024,
        stream: false,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ ok: false, message: err }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({
      ok: true,
      reply: data.choices?.[0]?.message?.content ?? "",
      usage: data.usage,
    });
  } catch (e) {
    return NextResponse.json({ ok: false, message: e.message }, { status: 500 });
  }
}
