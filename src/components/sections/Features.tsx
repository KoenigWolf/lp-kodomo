"use client";

// -------------------------------------------------
// ライブラリ・コンポーネントのインポート
// -------------------------------------------------
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Shield, Globe, Users, Home } from "lucide-react";

// -------------------------------------------------
// プログラムの特徴データ
// -------------------------------------------------
// 各オブジェクトは、アイコン、タイトル、説明文を持ちます。
const features = [
  {
    icon: Shield,
    title: "安心のサポート体制",
    description:
      "現地スタッフが24時間体制でサポート。緊急時も日本語で対応可能なので、初めての海外でも安心です。",
  },
  {
    icon: Globe,
    title: "語学＋異文化体験",
    description:
      "英語の勉強だけでなく、現地の文化や習慣を体験できるアクティビティも充実。楽しみながら学べます。",
  },
  {
    icon: Users,
    title: "対象年齢：小学生～高校生",
    description:
      "年齢やレベルに合わせた最適なプログラムをご用意。それぞれの成長段階に合わせた学びを提供します。",
  },
  {
    icon: Home,
    title: "安全な滞在先",
    description:
      "厳選されたホームステイ先や寮をご用意。安全で快適な環境で、現地の生活を体験できます。",
  },
];

// -------------------------------------------------
// FeatureCard コンポーネント
// -------------------------------------------------
/*
  各特徴カードを表示するコンポーネントです。
  ・アイコン、タイトル、説明を表示し、フラットなカードデザインにより内容を整理。
  ・アニメーションの遅延は index を利用して設定しています。
*/
interface FeatureCardProps {
  icon: React.ElementType; // Iconコンポーネント
  title: string;
  description: string;
  index: number; // アニメーション遅延設定用
  isInView: boolean; // 要素が画面内に入ったかの状態
}

function FeatureCard({ icon: Icon, title, description, index, isInView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* アイコン表示部分 */}
      <div className="flex-shrink-0 bg-blue-600 rounded-full p-3 text-white">
        <Icon size={24} />
      </div>
      {/* タイトルと説明 */}
      <div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

// -------------------------------------------------
// CTASection コンポーネント
// -------------------------------------------------
/*
  特別な夏の体験を訴求するCall To Action（CTA）セクションです。
  ・テキスト部分と、背景画像の表示部分に分けて構成しています。
  ・リンクボタンにアニメーション効果を付与し、ユーザ操作を強調します。
*/
function CTASection() {
  return (
    <div className="flex flex-col md:flex-row md:items-center rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      {/* テキスト・説明部分 */}
      <div className="md:w-1/2 p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          特別な夏の体験があなたのお子さまを待っています
        </h3>
        <p className="text-blue-100 mb-6">
          当プログラムは、英語力だけでなく、異文化への理解や自立心、コミュニケーション能力など、
          お子さまの将来に役立つスキルを育みます。
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#cta"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow transition-colors duration-300 hover:bg-blue-50 text-lg"
          >
            今すぐ詳細を見る
          </Link>
        </motion.div>
      </div>
      {/* 画像表示部分 */}
      <div className="md:w-1/2 relative h-64 md:h-auto">
        <Image src="/kodomo2.jpg" alt="親子の留学体験" fill className="object-cover" />
      </div>
    </div>
  );
}

// -------------------------------------------------
// Features コンポーネント（メイン）
// -------------------------------------------------
/*
  本コンポーネントは、プログラムの特徴セクション全体を構成します。
  ・タイトルと説明文、各FeatureCard、そしてCTAセクションで構成。
  ・useInViewフックにより、要素が画面内に入った際にアニメーションを開始します。
*/
export default function Features() {
  // アニメーション開始タイミング用の参照を設定
  const featuresRef = useRef(null);
  // 画面内に表示されたかを判定（初回のみ実行、0.3の割合表示時に発火）
  const isInView = useInView(featuresRef, { once: true, amount: 0.3 });

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* セクションタイトルと説明文 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            プログラムの特徴
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            子どもたちの成長を最大限サポートする、当プログラムならではの魅力をご紹介します
          </motion.p>
        </div>

        {/* 各特徴カードをグリッド表示 */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTAセクション */}
        <CTASection />
      </div>
    </section>
  );
}
