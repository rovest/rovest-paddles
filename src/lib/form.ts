import * as z from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&\.]{8,24}$/;
export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const numberPattern = /^-?\d+(\.\d+)?$/;
export const datetimeLocalPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
export const urlRoutePattern = /^[a-z](?:[a-z0-9]|-(?=[a-z0-9])){1,28}[a-z0-9]$/;
export const longUrlRoutePattern = /^[a-z](?:[a-z0-9]|-(?=[a-z0-9])){1,60}[a-z0-9]$/;

type PasswordSchemaProps = {
  requiredError: string;
  patternError: string;
};
export const passwordSchema = (props: PasswordSchemaProps) =>
  z
    .string({ required_error: props.requiredError })
    .refine((value) => value.length >= 8 && value.length < 24 && passwordPattern.test(value), {
      message: props.patternError,
    });

export const emailSchema = z.z
  .string()
  .min(1, { message: "메일 주소를 입력해주세요" })
  .refine((value) => emailPattern.test(value), {
    message: "올바른 메일 주소 형식이 아닌 것 같아요",
  });

type UniqueRouteSchemaProps = {
  requiredError: string;
  minLengthError: string;
  maxLengthError: string;
  patternFirstStringError: string;
  patternLastStringError: string;
  patternError: string;
};

export const uniqueRouteSchema = (props: UniqueRouteSchemaProps) =>
  z
    .string({ required_error: props.requiredError })
    .min(5, props.minLengthError)
    .max(30, props.maxLengthError)
    .refine((value) => /^[a-zA-Z]/.test(value), {
      message: props.patternFirstStringError,
    })
    .refine((value) => !value.endsWith("-"), {
      message: props.patternLastStringError,
    })
    .refine((value) => /^(?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9]))+$/.test(value), {
      message: props.patternError,
    });

type StorySlugIDSchemaProps = {
  requiredError: string;
  minLengthError: string;
  maxLengthError: string;
  patternLastStringError: string;
  patternError: string;
};
export const storySlugIDSchema = (props: StorySlugIDSchemaProps) =>
  z
    .string({ required_error: props.requiredError })
    .min(5, props.minLengthError)
    .max(30, props.maxLengthError)
    .refine((value) => !(value.endsWith("-") || value.endsWith("_")), {
      message: props.patternLastStringError,
    })
    .refine((value) => /^(?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9]))+$/.test(value), {
      message: props.patternError,
    });

export function objectToFormData(data: Record<string, unknown>): FormData {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key as keyof typeof data];
    // 파일 데이터 처리
    if (value instanceof File) {
      formData.append(key, value, value.name);
    }
    // 배열 데이터 처리 (예: 체크박스)
    else if (Array.isArray(value)) {
      value.forEach((subValue) => formData.append(key, subValue));
    }
    // 기타 데이터 처리
    else if (value !== null && value !== undefined && value !== "") {
      formData.append(key, String(value));
    }
  });
  return formData;
}

export function formDataToObject(formData: FormData): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  formData.forEach((value, key) => {
    // 기존에 키가 존재하는 경우 (배열로 처리)
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      // 현재 값이 배열이 아니면 배열로 변환
      if (!Array.isArray(result[key])) {
        result[key] = [result[key]];
      }
      // 값을 배열에 추가
      (result[key] as unknown[]).push(value);
    } else {
      // 파일 데이터 처리
      if (value && value instanceof File) {
        result[key] = value;
      } else {
        // 문자열 값 처리
        result[key] = value;
      }
    }
  });
  return result;
}
