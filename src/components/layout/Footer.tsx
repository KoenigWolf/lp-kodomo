import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

/*
  CompanyInfo コンポーネント
  ・会社情報（住所、電話番号、メールアドレス）を表示します。
*/
function CompanyInfo() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">キッズ留学</h3>
      <address className="not-italic text-blue-100 mb-4">
        〒100-0001<br />
        東京都千代田区大手町1-1-1<br />
        大手町ビル 5F
      </address>
      <p className="text-blue-100">TEL: 03-1234-5678</p>
      <p className="text-blue-100">Email: info@kids-ryugaku.example.com</p>
    </div>
  );
}

/*
  QuickLinks コンポーネント
  ・クイックリンク（内部ナビゲーション）をリスト表示します。
*/
function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">クイックリンク</h3>
      <ul className="space-y-2">
        <li>
          <Link href="#program" className="text-blue-100 hover:text-white transition-colors duration-200">
            プログラム概要
          </Link>
        </li>
        <li>
          <Link href="#testimonials" className="text-blue-100 hover:text-white transition-colors duration-200">
            体験談
          </Link>
        </li>
        <li>
          <Link href="#faq" className="text-blue-100 hover:text-white transition-colors duration-200">
            よくある質問
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-blue-100 hover:text-white transition-colors duration-200">
            お問い合わせ
          </Link>
        </li>
      </ul>
    </div>
  );
}

/*
  SocialMedia コンポーネント
  ・SNSリンク（LINE, Instagram, Facebook）をアイコン付きで表示します。
*/
function SocialMedia() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">ソーシャルメディア</h3>
      <div className="flex space-x-4">
        <Link
          href="https://line.me"
          className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
          aria-label="LINE公式アカウント"
        >
          <MessageCircle size={20} />
        </Link>
        <Link
          href="https://instagram.com"
          className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
          aria-label="Instagram公式アカウント"
        >
          <Instagram size={20} />
        </Link>
        <Link
          href="https://facebook.com"
          className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
          aria-label="Facebook公式ページ"
        >
          <Facebook size={20} />
        </Link>
      </div>
      <p className="mt-4 text-blue-100">
        公式SNSで最新情報をチェック！<br />
        キャンペーン情報やイベント情報も配信中
      </p>
    </div>
  );
}

/*
  Newsletter コンポーネント
  ・ニュースレター登録フォームを表示し、最新情報をメールで受け取るための入力欄を提供します。
*/
function Newsletter() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">ニュースレター登録</h3>
      <p className="text-blue-100 mb-3">
        最新のプログラム情報やお得な情報をメールでお届けします
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="メールアドレス"
          className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-700"
          aria-label="ニュースレター登録用メールアドレス"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-4 rounded-r-md transition-colors duration-200"
        >
          登録
        </button>
      </form>
    </div>
  );
}

/*
  FooterBottom コンポーネント
  ・フッター下部に表示する著作権情報と各種リンクを管理します。
*/
function FooterBottom({ currentYear }: { currentYear: number }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm text-blue-200 mb-4 md:mb-0">
        © {currentYear} キッズ留学 All Rights Reserved.
      </div>
      <div className="flex space-x-6">
        <Link href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-200">
          プライバシーポリシー
        </Link>
        <Link href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-200">
          利用規約
        </Link>
        <Link href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-200">
          特定商取引法に基づく表記
        </Link>
      </div>
    </div>
  );
}

/*
  Footer コンポーネント（メイン）
  ・フッター全体を構成し、上記の各サブコンポーネントを組み合わせて表示します。
*/
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <SocialMedia />
          <Newsletter />
        </div>
        <hr className="border-blue-700 my-8" />
        <FooterBottom currentYear={currentYear} />
      </div>
    </footer>
  );
}
