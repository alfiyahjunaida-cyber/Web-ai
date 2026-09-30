import Link from "next/link";
import { Zap, Gift, ShieldCheck, Sparkles, ArrowRight, KeyRound } from "lucide-react";

const features = [
  { icon: Zap, title: "Cepat", text: "Groq dikenal dengan respons yang sangat cepat, jawaban muncul hampir seketika." },
  { icon: Gift, title: "Gratis", text: "Groq menyediakan free tier. Kamu cukup pakai API key sendiri, tanpa langganan di sini." },
  { icon: ShieldCheck, title: "Privasi", text: "API key dan riwayat chat disimpan di browser-mu. Server hanya meneruskan request ke Groq." },
  { icon: Sparkles, title: "UI modern", text: "Dark mode, markdown, tombol salin dan regenerate, nyaman dipakai di HP." },
];

const steps = [
  "Buka console.groq.com/keys lalu login atau daftar.",
  "Klik Create API Key, beri nama, lalu salin key-nya.",
  "Buka Chat > Setting, tempel key, lalu klik Save & Test.",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:px-8">
        <header className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 text-white">
            <Sparkles size={18} />
          </span>
          AI Chat
        </header>

        <section className="mt-14 sm:mt-20">
          <h1 className="font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
            AI Chat <span className="text-orange-500">Powered by Groq</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Ngobrol dengan model AI cepat memakai API key Groq milikmu sendiri. Tanpa akun, tanpa database.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/chat" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400 active:scale-[0.98]">
              Mulai Chat <ArrowRight size={18} />
            </Link>
            <a href="#api-key" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3.5 font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
              <KeyRound size={18} /> Cara dapat API key
            </a>
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#12151c]">
              <Icon size={22} className="text-orange-500" />
              <h2 className="mt-3 font-display text-lg font-bold">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </section>

        <section id="api-key" className="mt-16 scroll-mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#12151c]">
          <h2 className="font-display text-2xl font-bold">Cara dapat API key Groq</h2>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-orange-500 text-xs font-bold text-white">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <footer className="mt-14 text-sm text-zinc-500">
          Dibuat dengan Next.js dan Groq API. Batas pemakaian gratis mengikuti aturan Groq.
        </footer>
      </div>
    </main>
  );
}
