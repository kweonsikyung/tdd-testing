import { toAbsolutePath, cleanUrl } from "./utils";

/**
 * 함수 기능 : 입력된 경로를 정규화하고 정리된 URL을 반환하고자 함
 * 만약 입력이 정규 표현식이면 그대로 반환하며, 문자열인 경우 절대 경로로 변환하고 URL을 정리하여 반환함.
 * @param path 입력된 경로 (문자열 또는 정규 표현식)
 * @returns 정리된 URL 또는 정규 표현식
 */
export function normalizePath(path: string | RegExp) {
  // 1. 입력이 정규 표현식이면 그대로 반환
  if (path instanceof RegExp) {
    return path;
  }

  // 2. 입력이 문자열인 경우 절대 경로로 변환
  const absolutePath = toAbsolutePath(path);

  // 3. 입력이 null 또는 undefined일 경우
  if (!absolutePath) {
    return null;
  }

  return cleanUrl(absolutePath);
}
