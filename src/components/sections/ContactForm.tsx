"use client";

// -------------------------------------------------
// ライブラリとフックのインポート
// -------------------------------------------------
import { motion } from "framer-motion"; // アニメーション用
import { Send } from "lucide-react"; // 送信アイコン
import { useContactForm } from "@/hooks/useContactForm"; // フォーム管理用のカスタムフック

// -------------------------------------------------
// ContactForm コンポーネント
// -------------------------------------------------
/*
  本コンポーネントは「お問い合わせ / 資料請求」フォームのUIを構築します。
  左側に連絡先情報、右側にフォーム本体を配置しており、フォームの送信状態に応じた表示切替を行います。
*/
export default function ContactForm() {
  // カスタムフックからフォームの状態と操作関数を取得
  const {
    formData,         // 入力されたデータ
    errors,           // バリデーションエラー
    isSubmitting,     // 送信中か否か
    isSubmitted,      // 送信完了状態
    handleChange,     // テキスト入力の変更ハンドラ
    handleCheckboxChange, // チェックボックスの変更ハンドラ
    handleSubmit,     // フォーム送信ハンドラ
    resetForm,        // フォームリセットハンドラ
  } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* -------------------------------------------------
                左カラム：連絡先情報の表示
            ------------------------------------------------- */}
            <div className="md:w-5/12 bg-blue-600 p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  お気軽にお問い合わせください
                </h2>
                <p className="mb-6">
                  留学プログラムについてのご質問や資料請求など、
                  お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">お問い合わせ先</h3>
                  <ContactInfo />
                </div>
              </motion.div>
            </div>

            {/* -------------------------------------------------
                右カラム：お問い合わせフォーム本体
            ------------------------------------------------- */}
            <div className="md:w-7/12 p-8">
              { !isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    お問い合わせ / 資料請求
                  </h3>

                  {/* お名前入力フィールド */}
                  <FormField
                    label="お名前"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />

                  {/* メールアドレス入力フィールド */}
                  <FormField
                    label="メールアドレス"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />

                  {/* 電話番号入力フィールド */}
                  <FormField
                    label="電話番号"
                    type="tel"
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    error={errors.tel}
                  />

                  {/* お子様の年齢選択フィールド */}
                  <div className="mb-6">
                    <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
                      お子様の年齢
                    </label>
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

                  {/* お問い合わせ内容入力フィールド */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      お問い合わせ内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* お問い合わせ種別チェックボックス群 */}
                  <div className="mb-6">
                    <p className="block text-gray-700 font-medium mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <CheckboxField
                        label="一般的なお問い合わせ"
                        name="isInquiry"
                        checked={formData.isInquiry}
                        onChange={handleCheckboxChange}
                        error={errors.isInquiry}
                      />
                      <CheckboxField
                        label="資料請求"
                        name="isDocRequest"
                        checked={formData.isDocRequest}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>

                  {/* フォーム送信ボタン */}
                  <SubmitButton isSubmitting={isSubmitting} />
                </form>
              ) : (
                // 送信完了後の確認画面
                <SubmissionComplete onReset={resetForm} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------
// ContactInfo コンポーネント
// -------------------------------------------------
/*
  連絡先情報を複数のアイテムとしてまとめて表示するコンポーネントです。
  電話番号、メールアドレス、LINE ID の各情報を表示します。
*/
function ContactInfo() {
  return (
    <>
      <ContactInfoItem
        icon={<PhoneIcon />}
        text="03-1234-5678"
      />
      <ContactInfoItem
        icon={<MailIcon />}
        text="info@kids-ryugaku.example.com"
      />
      <ContactInfoItem
        icon={<LineIcon />}
        text="LINE ID: kids_ryugaku"
      />
    </>
  );
}

// -------------------------------------------------
// ContactInfoItem コンポーネント
// -------------------------------------------------
/*
  個々の連絡先情報（アイコンとテキスト）を表示するためのコンポーネントです。
*/
function ContactInfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center mb-3">
      <div className="mr-3">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

// -------------------------------------------------
// FormField コンポーネント
// -------------------------------------------------
/*
  テキスト入力フィールドのラベル、入力要素、エラーメッセージをまとめたコンポーネントです。
  汎用性を持たせ、任意の入力フィールドとして利用できます。
*/
function FormField({
  label,
  type,
  id,
  name,
  value,
  onChange,
  error,
  required = false,
}: {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-2 border ${error ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

// -------------------------------------------------
// CheckboxField コンポーネント
// -------------------------------------------------
/*
  チェックボックスとそのラベルを組み合わせた入力フィールドです。
  エラー表示にも対応しています。
*/
function CheckboxField({
  label,
  name,
  checked,
  onChange,
  error,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`form-checkbox h-5 w-5 ${error ? "text-red-500 border-red-500" : "text-blue-600"}`}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}

// -------------------------------------------------
// SubmitButton コンポーネント
// -------------------------------------------------
/*
  フォーム送信ボタンの表示と状態管理を行うコンポーネントです。
  送信中の場合はローディングスピナーとテキストを表示し、通常時は送信アイコンとテキストを表示します。
*/
function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <div className="text-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className={`inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300 ${
          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner />
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
  );
}

// -------------------------------------------------
// SubmissionComplete コンポーネント
// -------------------------------------------------
/*
  フォーム送信完了時に表示する確認画面です。
  送信完了メッセージと再度フォームに戻るためのボタンを提供します。
*/
function SubmissionComplete({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <CheckIcon />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">送信完了しました</h3>
      <p className="text-gray-600 mb-8">
        お問い合わせありがとうございます。<br />
        担当者より2営業日以内にご連絡いたします。
      </p>
      <button
        type="button"
        onClick={onReset}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
      >
        フォームに戻る
      </button>
    </motion.div>
  );
}

// -------------------------------------------------
// アイコンコンポーネント群
// -------------------------------------------------
/*
  以下は、各種アイコン（電話、メール、LINE、チェック、ローディング）を SVG で実装したコンポーネントです。
*/

// 電話アイコン
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>電話アイコン</title>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// メールアイコン
function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>メールアイコン</title>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// LINEアイコン
function LineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>LINEアイコン</title>
      <path d="M9 12h.01M15 12h.01M12 12h.01M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
    </svg>
  );
}

// チェックアイコン（送信完了）
function CheckIcon() {
  return (
    <svg
      className="w-8 h-8 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>チェックアイコン</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ローディングスピナー（送信中）
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <title>読み込み中</title>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
