// サンプル画像をプロジェクトに配置するため、public ディレクトリにダミー画像をシミュレートします
// 実際のプロジェクトでは、適切な画像を public ディレクトリに配置してください

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Process from "../components/sections/Process";
import ContactForm from "../components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
