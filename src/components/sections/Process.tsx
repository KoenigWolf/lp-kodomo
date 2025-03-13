"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Users, FileText, BookOpen, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "無料相談",
    description: "LINEまたはお問い合わせフォームから簡単にご相談いただけます。ご不明点や気になることをお気軽にお聞かせください。",
  },
  {
    icon: Users,
    title: "プログラム説明＆カウンセリング",
    description: "お子様の年齢や目的に合ったプログラムをご提案します。ご家族のご要望をヒアリングし、最適なプランをご紹介します。",
  },
  {
    icon: FileText,
    title: "申し込み・手続きサポート",
    description: "留学に必要な各種手続きを丁寧にサポート。ビザ申請から航空券手配まで、専門スタッフがお手伝いします。",
  },
  {
    icon: BookOpen,
    title: "出発前オリエンテーション",
    description: "現地での生活や注意点について詳しくご説明します。事前英会話レッスンやホストファミリーとの顔合わせも行います。",
  },
  {
    icon: Plane,
    title: "現地サポート＆留学開始！",
    description: "24時間体制の現地サポートで安心の留学生活がスタート。お子様の成長を全力でバックアップします。",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            お申し込みの流れ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            初めての留学でも安心のステップバイステップガイド
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start mb-8 relative"
            >
              {/* 左側のライン */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-blue-200 -z-10" />
              )}
              
              {/* アイコン */}
              <div className="relative z-10 flex-shrink-0 bg-blue-600 rounded-full p-3 mr-4 text-white shadow-md">
                <step.icon size={24} />
              </div>
              
              {/* ステップ内容 */}
              <div className="flex-grow">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">
                      STEP {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-blue-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="#cta"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg"
          >
            無料相談はこちら
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 