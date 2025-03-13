/**
 * スムーズスクロール機能を提供するカスタムフック
 * @param offset - スクロール時のオフセット値（ヘッダーの高さなど）
 * @returns スクロール処理を行う関数
 */
export const useScrollTo = (offset = 0) => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return scrollTo;
}; 