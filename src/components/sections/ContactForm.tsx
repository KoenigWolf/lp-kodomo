"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    childAge: "",
    message: "",
    isInquiry: true,
    isDocRequest: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 実際のフォーム送信処理はここに実装します
    // 今回はデモのため、送信成功をシミュレートします
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-blue-600 p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">お気軽にお問い合わせください</h2>
                <p className="mb-6">留学プログラムについてのご質問や資料請求など、お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">お問い合わせ先</h3>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <title>電話アイコン</title>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>03-1234-5678</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <title>メールアイコン</title>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>info@kids-ryugaku.example.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <title>LINEアイコン</title>
                      <path d="M9 12h.01M15 12h.01M12 12h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
                    </svg>
                    <span>LINE ID: kids_ryugaku</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-7/12 p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">お問い合わせ / 資料請求</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">お名前 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">メールアドレス <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="tel" className="block text-gray-700 font-medium mb-2">電話番号</label>
                    <input
                      type="tel"
                      id="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">お子様の年齢</label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">選択してください</option>
                      <option value="小学1-3年">小学1-3年生</option>
                      <option value="小学4-6年">小学4-6年生</option>
                      <option value="中学生">中学生</option>
                      <option value="高校生">高校生</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">お問い合わせ内容</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <p className="block text-gray-700 font-medium mb-2">お問い合わせ種別 <span className="text-red-500">*</span></p>
                    <div className="flex flex-wrap gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="isInquiry"
                          checked={formData.isInquiry}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">一般的なお問い合わせ</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="isDocRequest"
                          checked={formData.isDocRequest}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">資料請求</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          送信する
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">送信完了しました</h3>
                  <p className="text-gray-600 mb-8">お問い合わせありがとうございます。<br />担当者より2営業日以内にご連絡いたします。</p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
                  >
                    フォームに戻る
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 