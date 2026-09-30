import "./globals.css";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "AI Chat - Powered by Groq",
  description: "Chat dengan AI memakai API key Groq milikmu sendiri.",
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0d12" };

// Atur tema sebelum halaman tampil supaya tidak berkedip
const themeScript = `try{var t=localStorage.getItem("aichat_theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-body antialiased bg-zinc-50 text-zinc-900 dark:bg-[#0b0d12] dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
