# こども留学プログラム ランディングページ

海外留学プログラムを提供する事業者向けのランディングページです。

![プロジェクトのスクリーンショット](/public/kodomo1.jpg)

## 🌟 主要機能と特徴

- **レスポンシブデザイン**：スマートフォンからデスクトップまで、あらゆるデバイスで最適な表示を実現
- **スムーズなアニメーション**：Framer Motionを活用した洗練された画面遷移とインタラクション
- **最適化されたパフォーマンス**：Next.jsによる高速な表示とSEO対策
- **モダンなUIコンポーネント**：TailwindCSSによる美しく一貫性のあるデザイン

## 🛠 技術スタック

- **フレームワーク**：Next.js 15.2.2
- **言語**：TypeScript
- **スタイリング**：TailwindCSS 4.x
- **アニメーション**：Framer Motion 12.5.0
- **アイコン**：Lucide React
- **その他のライブラリ**：
  - class-variance-authority
  - clsx
  - tailwind-merge
  - zod

## 📋 システム要件

- Node.js 18.x以上
- npm または yarn

## 🚀 セットアップ手順

1. リポジトリのクローン:
```bash
git clone [リポジトリURL]
cd kodomo
```

2. 依存関係のインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

## 📂 ディレクトリ構造

```
kodomo/
├── public/           # 静的ファイル（画像など）
├── src/
│   ├── app/         # Next.js 13のApp Router構造
│   ├── components/  # Reactコンポーネント
│   │   ├── layout/   # レイアウト関連のコンポーネント
│   │   ├── sections/ # 各セクションのコンポーネント
│   │   └── ui/       # 共通UIコンポーネント
│   ├── hooks/       # カスタムフック
│   └── lib/         # ユーティリティ関数
├── package.json
└── tsconfig.json
```

## 🔧 使用方法

### 開発モード

```bash
npm run dev
```

開発サーバーが起動し、ホットリロードが有効になります。

### プロダクションビルド

```bash
npm run build
npm run start
```

最適化されたプロダクションビルドを作成し、サーバーを起動します。

### Lint実行

```bash
npm run lint
```

## 📝 コーディング規約

- コンポーネントは機能ごとに分割し、適切なディレクトリに配置
- TypeScriptの型定義を適切に行う
- アクセシビリティに配慮したマークアップ
- コメントによるコードの説明を適切に行う
