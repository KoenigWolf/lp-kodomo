"use client";

// -------------------------------------------------
// 外部モジュールのインポート
// -------------------------------------------------
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// -------------------------------------------------
// Hero コンポーネント
// セクション全体のレイアウト（テキスト・画像・背景装飾）を管理
// -------------------------------------------------
export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* 左側：テキストコンテンツ */}
          <HeroText />
          {/* 右側：画像と装飾要素 */}
          <HeroImageSection />
        </div>
      </div>
      {/* 背景全体の装飾SVG */}
      <HeroBackgroundDecoration />
    </section>
  );
}

// -------------------------------------------------
// HeroText コンポーネント
// ヒーローセクションのテキスト・説明・バッジ・CTAボタンを表示
// -------------------------------------------------
function HeroText() {
  return (
    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* メインタイトル */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-6">
          この夏、子どもに特別な経験を！<br />
          <span className="text-yellow-500">
            海外での成長と学びをサポート
          </span>
        </h1>

        {/* 説明文 */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          安心・安全な環境での短期留学プログラム。<br className="hidden md:inline" />
          語学だけでなく、多文化を体験しながら大きく成長！
        </p>

        {/* バッジ群：各バッジはアイコンとテキストを表示 */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>安心サポートアイコン</title>
                <path d="m9 12 2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            }
            text="安心のサポート体制"
          />
          <Badge
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>実績アイコン</title>
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            }
            text="20年以上の実績"
          />
        </div>

        {/* CTAボタン：無料資料請求へのリンク */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            href="#cta"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-lg"
          >
            無料資料請求はこちら
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// -------------------------------------------------
// Badge コンポーネント
// アイコン(svg)とテキストを組み合わせたバッジを表示
// -------------------------------------------------
interface BadgeProps {
  svg: React.ReactNode;
  text: string;
}

function Badge({ svg, text }: BadgeProps) {
  return (
    <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
      <div className="mr-2 text-blue-600">{svg}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

// -------------------------------------------------
// HeroImageSection コンポーネント
// 右側に表示する画像と追加の装飾要素を管理
// -------------------------------------------------
function HeroImageSection() {
  return (
    <div className="w-full lg:w-1/2 relative">
      {/* メイン画像のアニメーション表示 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/kodomo1.jpg"
            alt="子どもの留学体験"
            fill
            className="object-cover"
            priority
          />
          {/* 画像上部のグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
      </motion.div>

      {/* 装飾要素：円形の背景 */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
    </div>
  );
}

// -------------------------------------------------
// HeroBackgroundDecoration コンポーネント
// セクション下部に表示する背景装飾用SVG
// -------------------------------------------------
function HeroBackgroundDecoration() {
  return (
    <div className="absolute top-20 left-0 w-full">
      <svg className="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <title>背景装飾</title>
        <path
          fill="rgba(59, 130, 246, 0.05)"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </svg>
    </div>
  );
}
