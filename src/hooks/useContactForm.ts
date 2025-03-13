import { useState } from 'react';
import { z } from 'zod';

// フォームの入力値の型定義
export interface ContactFormData {
  name: string;
  email: string;
  tel: string;
  childAge: string;
  message: string;
  isInquiry: boolean;
  isDocRequest: boolean;
}

// バリデーションスキーマの定義
const contactFormSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  tel: z.string().regex(/^[0-9-]*$/, '電話番号は数字とハイフンのみ使用可能です'),
  childAge: z.string(),
  message: z.string(),
  isInquiry: z.boolean(),
  isDocRequest: z.boolean(),
}).refine((data: {isInquiry: boolean, isDocRequest: boolean}) => data.isInquiry || data.isDocRequest, {
  message: "お問い合わせ種別を選択してください",
  path: ["isInquiry"]
});

/**
 * お問い合わせフォームのロジックを管理するカスタムフック
 * @returns フォームの状態と操作メソッド
 */
export const useContactForm = () => {
  // フォームの初期値
  const initialState: ContactFormData = {
    name: '',
    email: '',
    tel: '',
    childAge: '',
    message: '',
    isInquiry: true,
    isDocRequest: false,
  };

  // フォームの状態管理
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 入力値の更新処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 入力時のエラーをクリア
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // チェックボックスの更新処理
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // バリデーション
      const validatedData = contactFormSchema.parse(formData);

      // TODO: API呼び出し
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setFormData(initialState);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: typeof errors = {};
        
        for (const err of error.errors) {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        }
        
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // フォームのリセット
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
  };
}; 