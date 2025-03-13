"use client";

// -------------------------------------------------
// 外部モジュールのインポート
// -------------------------------------------------
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "@/hooks/useScrollTo";

// -------------------------------------------------
// ナビゲーション項目の定義
// -------------------------------------------------
const navItems = [
  { label: "プログラム概要", href: "program" },
  { label: "体験談", href: "testimonials" },
  { label: "よくある質問", href: "faq" },
  { label: "お問い合わせ", href: "contact" },
];

/*
  Logo コンポーネント
  ・ヘッダー左側に表示するロゴ部分。
  ・ボタンをクリックすると、ページトップへスクロールする。
*/
function Logo({ scrollTo }: { scrollTo: (target: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => scrollTo("top")}
      className="flex items-center space-x-2"
    >
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          K
        </div>
      </div>
      <span className="text-xl font-bold text-blue-600">キッズ留学</span>
    </button>
  );
}

/*
  DesktopNav コンポーネント
  ・デスクトップ用のナビゲーションメニューを表示。
  ・各ナビゲーション項目と、資料請求ボタンを含む。
*/
function DesktopNav({ handleNavClick }: { handleNavClick: (href: string) => void }) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => handleNavClick(item.href)}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
        >
          {item.label}
        </button>
      ))}
      <button
        type="button"
        onClick={() => handleNavClick("contact")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
      >
        資料請求
      </button>
    </nav>
  );
}

/*
  MobileNav コンポーネント
  ・モバイル用のナビゲーションメニューを表示。
  ・AnimatePresence と Framer Motion により、開閉時にアニメーション効果を付与。
*/
function MobileNav({
  isMenuOpen,
  handleNavClick,
}: {
  isMenuOpen: boolean;
  handleNavClick: (href: string) => void;
}) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center font-medium transition-colors duration-200"
            >
              資料請求
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
  Header コンポーネント（メイン）
  ・固定ヘッダーとして、ページ上部に常時表示。
  ・スクロール用カスタムフックで指定セクションへスムーズに遷移。
  ・モバイルとデスクトップで表示するナビゲーションを切り替える。
*/
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollTo(80); // ヘッダー高さ分のオフセットを適用

  // ナビゲーション項目クリック時の処理（メニューを閉じ、スクロール）
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <Logo scrollTo={scrollTo} />

        {/* デスクトップナビゲーション */}
        <DesktopNav handleNavClick={handleNavClick} />

        {/* モバイル用メニューボタン */}
        <button
          type="button"
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルナビゲーション */}
      <MobileNav isMenuOpen={isMenuOpen} handleNavClick={handleNavClick} />
    </header>
  );
}
