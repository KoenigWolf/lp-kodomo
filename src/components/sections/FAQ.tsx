"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "support",
    question: "どんなサポートがありますか？",
    answer:
      "現地では、日本語・英語に堪能なスタッフが24時間体制でサポートしています。緊急時の医療サポート、ホームステイ先との連携、日々の学習サポートなど、お子様の留学生活を総合的にバックアップします。また、出発前の準備から帰国後のフォローアップまで、一貫したサポート体制を整えています。",
  },
  {
    id: "first-time",
    question: "初めての海外でも大丈夫？",
    answer:
      "はい、初めての海外でも安心してご参加いただけます。渡航前には丁寧なオリエンテーションを実施し、現地での生活や学習について詳しくご説明します。また、初めての方向けの英会話レッスンも提供しています。現地では経験豊富なスタッフが常駐し、24時間体制でサポートするので安心です。",
  },
  {
    id: "cost",
    question: "どのくらいの費用がかかりますか？",
    answer:
      "プログラムの期間や渡航先によって異なりますが、2週間の短期留学プログラムで約35〜45万円程度です。この費用には、往復航空券、滞在費（ホームステイまたは寮）、食事、授業料、現地アクティビティ、旅行保険が含まれています。詳細な費用については、お問い合わせいただくか、無料資料請求でご確認ください。",
  },
  {
    id: "destinations",
    question: "どんな国・地域に行けますか？",
    answer:
      "主にアメリカ、カナダ、イギリス、オーストラリア、ニュージーランドなどの英語圏を中心に、安全で教育環境の整った地域を選定しています。それぞれの国の特色を活かしたプログラム内容となっていますので、お子様の興味や目的に合わせてお選びいただけます。",
  },
  {
    id: "beginner",
    question: "英語が全く話せませんが参加できますか？",
    answer:
      "はい、英語が初心者の方でも安心してご参加いただけます。事前に基礎的な英会話レッスンを提供し、現地では英語レベルに合わせたクラス分けを行います。また、日本語サポートもありますので、言語面での不安はありません。むしろ、英語の基礎を身につける絶好の機会となります。",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            よくある質問
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            プログラムについてよくいただくご質問をまとめました
          </motion.p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors duration-200"
                aria-expanded={activeIndex === index ? "true" : "false"}
              >
                <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white border border-blue-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 