"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Shield, Globe, Users, Home } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "安心のサポート体制",
    description: "現地スタッフが24時間体制でサポート。緊急時も日本語で対応可能なので、初めての海外でも安心です。",
  },
  {
    icon: Globe,
    title: "語学＋異文化体験",
    description: "英語の勉強だけでなく、現地の文化や習慣を体験できるアクティビティも充実。楽しみながら学べます。",
  },
  {
    icon: Users,
    title: "対象年齢：小学生～高校生",
    description: "年齢やレベルに合わせた最適なプログラムをご用意。それぞれの成長段階に合わせた学びを提供します。",
  },
  {
    icon: Home,
    title: "安全な滞在先",
    description: "厳選されたホームステイ先や寮をご用意。安全で快適な環境で、現地の生活を体験できます。",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-blue-50 rounded-xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 bg-blue-600 rounded-full p-3 text-white">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
          <div className="md:w-1/2 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">特別な夏の体験があなたのお子さまを待っています</h3>
            <p className="text-blue-100 mb-6">当プログラムは、英語力だけでなく、異文化への理解や自立心、コミュニケーション能力など、お子さまの将来に役立つスキルを育みます。</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#cta"
                className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow transition-colors duration-300 hover:bg-blue-50 text-lg"
              >
                今すぐ詳細を見る
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              [ここに親子の画像]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 