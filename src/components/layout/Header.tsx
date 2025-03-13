"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "プログラム概要", href: "#program" },
  { label: "体験談", href: "#testimonials" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">K</div>
          </div>
          <span className="text-xl font-bold text-blue-600">キッズ留学</span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            資料請求
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
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
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#cta"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-center font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                資料請求
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 