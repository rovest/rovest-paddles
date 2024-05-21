import type { Locale } from "@/types/global";

export const koreaTaxRate = 10;

export function numberFormat(number: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(undefined, options).format(number);
}

/**
 * 조회수를 지역화된 포맷으로 표시합니다.
 * @param {number} count - 조회수
 * @param {string} locale - 표시할 지역 (예: 'en-us', 'ko-kr')
 * @returns {string} 지역화된 조회수 문자열
 */
export function countFormat(count: number, locale: Locale) {
  const formatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });
  return formatter.format(count);
}

export function calculateTaxAmount(price: number): number {
  const taxAmount = price * (koreaTaxRate / 100);
  return taxAmount;
}

export function numberToBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// 사용 예시
// const number = 1234567.89;
// const formattedNumber = numberFormat(number);
// console.log(formattedNumber); // 출력: "1,234,567.89"
