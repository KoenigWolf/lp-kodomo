"use client";

// -------------------------------------------------
// 必要なモジュールのインポート
// -------------------------------------------------
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Users,
  FileText,
  BookOpen,
  Plane,
} from "lucide-react";

// -------------------------------------------------
// お申し込みの各ステップデータ
// -------------------------------------------------
// 各ステップは、アイコン、タイトル、説明文を持つオブジェクトとして定義
const steps = [
  {
    icon: MessageSquare,
    title: "無料相談",
    description:
      "LINEまたはお問い合わせフォームから簡単にご相談いただけます。ご不明点や気になることをお気軽にお聞かせください。",
  },
  {
    icon: Users,
    title: "プログラム説明＆カウンセリング",
    description:
      "お子様の年齢や目的に合ったプログラムをご提案します。ご家族のご要望をヒアリングし、最適なプランをご紹介します。",
  },
  {
    icon: FileText,
    title: "申し込み・手続きサポート",
    description:
      "留学に必要な各種手続きを丁寧にサポート。ビザ申請から航空券手配まで、専門スタッフがお手伝いします。",
  },
  {
    icon: BookOpen,
    title: "出発前オリエンテーション",
    description:
      "現地での生活や注意点について詳しくご説明します。事前英会話レッスンやホストファミリーとの顔合わせも行います。",
  },
  {
    icon: Plane,
    title: "現地サポート＆留学開始！",
    description:
      "24時間体制の現地サポートで安心の留学生活がスタート。お子様の成長を全力でバックアップします。",
  },
];

// -------------------------------------------------
// ProcessStep コンポーネント
// -------------------------------------------------
/*
  各ステップの表示を担当するサブコンポーネントです。
  ・motion.div により左右（偶数／奇数）からのアニメーション表示を実現。
  ・現在のステップが最後でなければ、左側に縦ラインを描画します。
*/
interface ProcessStepProps {
  step: { icon: React.ElementType; title: string; description: string };
  index: number;
  isInView: boolean;
  totalSteps: number;
}

function ProcessStep({ step, index, isInView, totalSteps }: ProcessStepProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30, // 偶数は左、奇数は右からスライド
      }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex items-start mb-8 relative"
    >
      {/* 左側のライン（最後のステップ以外に表示） */}
      {index < totalSteps - 1 && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-blue-200 -z-10" />
      )}
      
      {/* アイコン表示部分 */}
      <div className="relative z-10 flex-shrink-0 bg-blue-600 rounded-full p-3 mr-4 text-white shadow-md">
        <step.icon size={24} />
      </div>
      
      {/* ステップ内容：STEP番号、タイトル、説明 */}
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
  );
}

// -------------------------------------------------
// ProcessCTA コンポーネント
// -------------------------------------------------
/*
  ステップ一覧の下に表示するコールトゥアクション（CTA）ボタンです。
  リンク先「無料相談はこちら」への遷移を実現します。
*/
function ProcessCTA({ isInView }: { isInView: boolean }) {
  return (
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
  );
}

// -------------------------------------------------
// Process コンポーネント（メイン）
// -------------------------------------------------
/*
  本コンポーネントは「お申し込みの流れ」セクション全体を構成します。
  ・見出し、説明文、各ステップ、そして最下部のCTAボタンで構成されます。
  ・useInView を利用して、スクロール時にアニメーションを開始します。
*/
export default function Process() {
  // ステップ一覧全体の表示タイミングを管理するための参照を作成
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* セクションタイトルと説明 */}
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

        {/* ステップ一覧 */}
        <div ref={ref} className="max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={index}
              isInView={isInView}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* コールトゥアクション */}
        <ProcessCTA isInView={isInView} />
      </div>
    </section>
  );
}
