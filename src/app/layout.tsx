import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "子どもの夏休み留学プログラム | 安心・安全な環境で多文化体験",
  description: "お子様の夏休みを、語学と多文化体験で彩る短期留学プログラム。20年以上の実績と24時間サポート体制で、安心・安全な海外体験をご提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
