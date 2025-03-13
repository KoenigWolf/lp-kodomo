"use client";

// -------------------------------------------------
// 必要なモジュールのインポート
// -------------------------------------------------
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

// -------------------------------------------------
// 参加者の声のデータ定義
// -------------------------------------------------
// 各 testimonial は、参加者名、役職、コメント、星評価（数値）を保持
const testimonials = [
  {
    name: "佐藤 裕子",
    role: "小学5年生の母",
    comment:
      "子どもが自信を持ち、英語に興味を持つようになりました！初めは心配でしたが、帰国後の成長ぶりに驚いています。毎日楽しく過ごせたようで、また参加したいと言っています。",
    stars: 5,
  },
  {
    name: "田中 誠一",
    role: "中学2年生の父",
    comment:
      "初めての海外でも、しっかりサポートしてもらえて安心でした！現地スタッフの方の対応も素晴らしく、子どもも楽しく過ごせたようです。英語力も向上し、何より自信がついたのが一番の収穫でした。",
    stars: 5,
  },
  {
    name: "山田 美穂",
    role: "小学6年生の母",
    comment:
      "娘が「また行きたい！」と言うほど充実した留学でした。現地の友達もでき、SNSでやり取りしています。異文化への理解が深まり、視野が広がったと感じます。",
    stars: 5,
  },
];

// -------------------------------------------------
// TestimonialCard コンポーネント
// -------------------------------------------------
/*
  各参加者の声をカード形式で表示するサブコンポーネントです。
  ・星評価は、配列と map を利用して表示（評価に応じた色付け）。
  ・コメント部分は、引用符の装飾を絶対配置で追加しています。
*/
interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    comment: string;
    stars: number;
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6">
        {/* 星評価 */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={`star-${i}-${testimonial.name}`}
                size={16}
                fill={i < testimonial.stars ? "currentColor" : "none"}
                className={i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        
        {/* コメント部分 */}
        <p className="text-gray-600 mb-6 relative">
          <span className="absolute -top-4 -left-2 text-4xl text-blue-200">"</span>
          {testimonial.comment}
          <span className="absolute -bottom-6 -right-2 text-4xl text-blue-200">"</span>
        </p>
        
        {/* プロフィール（参加者名と役職） */}
        <div className="flex items-center mt-8">
          {/* アイコン（参加者名の先頭文字を表示） */}
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative bg-blue-100 flex items-center justify-center text-blue-500 font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-blue-800">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -------------------------------------------------
// TestimonialCTA コンポーネント
// -------------------------------------------------
/*
  参加者の声セクション下部に配置するコールトゥアクションボタンです。
  クリックで「無料で相談する」ページ（もしくはセクション）へ遷移します。
*/
function TestimonialCTA({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-center"
    >
      <Link
        href="#contact"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg"
      >
        まずは無料で相談する
      </Link>
    </motion.div>
  );
}

// -------------------------------------------------
// Testimonials コンポーネント（メイン）
// -------------------------------------------------
/*
  本コンポーネントは、参加者の声セクション全体を構成します。
  ・セクションタイトル、説明文、参加者の声カード（グリッド表示）、およびCTAボタンで構成されます。
  ・useInView フックを利用して、スクロール時に各要素のアニメーションを制御しています。
*/
export default function Testimonials() {
  // グリッド全体のアニメーションタイミング管理用参照を作成
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* セクションタイトルと説明 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          >
            参加者の声
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            実際にプログラムに参加されたお子さまの保護者様からの声をご紹介します
          </motion.p>
        </div>

        {/* 参加者の声カードをグリッド表示 */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTAボタン */}
        <TestimonialCTA isInView={isInView} />
      </div>
    </section>
  );
}
