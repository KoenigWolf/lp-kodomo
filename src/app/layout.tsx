// =====================================================
// Next.js Root Layout コンポーネント
// =====================================================

// -------------------------
// 外部モジュール・グローバルスタイルのインポート
// -------------------------
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// -------------------------
// Google Fonts の設定
// -------------------------
/*
  Next.js のフォント最適化機能を利用して、Google Fonts の「Inter」と「Noto Sans JP」を読み込みます。
  
  - Inter:
    ・ラテン文字用のフォントとして設定
    ・CSS 変数 (--font-inter) として利用可能
  - Noto Sans JP:
    ・日本語用のフォントとして設定
    ・CSS 変数 (--font-noto-sans-jp) として利用可能
    ・指定したフォントウェイト（400, 500, 700）を読み込み

  display: "swap" を指定することで、フォント読み込み中もフォールバックフォントが表示され、
  ユーザに対してスムーズな表示を提供します。
*/
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

// -------------------------
// アプリケーションのメタデータ定義
// -------------------------
/*
  ページのタイトルや説明文など、SEO対策やSNSでのシェア時に利用する情報を定義します。
*/
export const metadata: Metadata = {
  title: "子どもの夏休み留学プログラム | 安心・安全な環境で多文化体験",
  description:
    "お子様の夏休みを、語学と多文化体験で彩る短期留学プログラム。20年以上の実績と24時間サポート体制で、安心・安全な海外体験をご提供します。",
};

// -------------------------
// RootLayout コンポーネントの定義
// -------------------------
/*
  RootLayout は全ページの共通レイアウトを提供するコンポーネントです。
  <html> 要素に言語属性を設定し、<body> 要素にはグローバルなフォントやスタイル（例：antialiased）を適用します。
  子コンテンツは {children} として受け取り、各ページ固有の内容をここにレンダリングします。
*/
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // body 要素に適用するクラス名を定義（Google Fonts の CSS 変数を含む）
  const bodyClassNames = `${inter.variable} ${notoSansJP.variable} font-sans antialiased`;

  return (
    <html lang="ja">
      <body className={bodyClassNames}>
        {children}
      </body>
    </html>
  );
}
