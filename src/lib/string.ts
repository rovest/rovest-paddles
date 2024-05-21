type Truncate = (text: string, maxLength: number) => string;

export const truncate: Truncate = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  let truncatedText = text.slice(0, maxLength);

  // 말줄임 기호('...')를 붙일 때, 한글 문자가 잘리는 경우 보정
  const lastChar = truncatedText.charAt(truncatedText.length - 1);
  if (lastChar.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)) {
    truncatedText = truncatedText.slice(0, -1);
  }

  return `${truncatedText}...`;
};

export const generateRandomString = (n: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
};

export const generateRandomUserNickname = (): string => {
  const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
  const formattedNumber = randomNumber.toString();
  return `#${formattedNumber}`;
};

type generateUUIDProps = {
  isFirstCharLetter?: boolean;
};
export function generateUUID(filters?: generateUUIDProps): string {
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c, i) => {
    const r = (Math.random() * 16) | 0;
    let v = c === "x" ? r : (r & 0x3) | 0x8;
    if (filters && filters.isFirstCharLetter) {
      v = c === "x" ? (i === 0 ? (r % 6) + 10 : r) : (r & 0x3) | 0x8;
    }
    return v.toString(16);
  });
  return uuid;
}

export const isUUID = (str: string): boolean => {
  const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidPattern.test(str);
};

export const capitalize = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const hasFinalConsonant = (word: string): boolean => {
  const lastChar = word[word.length - 1];
  // 받침이 있는지 여부를 체크
  return (lastChar.charCodeAt(0) - 44032) % 28 !== 0;
};

// HTML 태그를 줄바꿈 문자로 바꿉니다.
export function stripHtml(html: string) {
  let text = html.replace(/<[^>]+>/g, "\n");
  // 연속되는 줄바꿈 문자를 하나의 줄바꿈으로 치환합니다.
  text = text.replace(/\n\s*\n/g, "\n");
  // 여러 공백을 하나의 공백으로 치환합니다.
  text = text.replace(/\s\s+/g, " ");
  // 앞뒤 공백 및 줄바꿈을 제거합니다.
  text = text.trim();
  return text;
}
