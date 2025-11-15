import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GDPRProvider } from "../contexts/GDPRContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sicko Design - Auto Detailing Constanța",
  description: "Servicii profesionale de detailing auto în Constanța. Transformăm mașinile tale în opere de artă cu atenție la detalii și pasiune pentru perfecțiune.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <Providers>
          <GDPRProvider>
            {children}
          </GDPRProvider>
        </Providers>
      </body>
    </html>
  );
}
