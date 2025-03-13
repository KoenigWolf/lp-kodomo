// =============================
// 必要なコンポーネントをインポート
// =============================
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Process from "../components/sections/Process";
import ContactForm from "../components/sections/ContactForm";

// =============================
// Homeコンポーネント
// =============================
// このコンポーネントはアプリのホームページを構成する
// セクションをまとめてレンダリングする
export default function Home() {
  return (
    <>
      {/* ヘッダーコンポーネント */}
      <Header />

      {/* メインコンテンツ */}
      <main>
        {/* 各セクションのコンポーネントを順番に配置 */}
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Process />
        <ContactForm />
      </main>

      {/* フッターコンポーネント */}
      <Footer />
    </>
  );
}
