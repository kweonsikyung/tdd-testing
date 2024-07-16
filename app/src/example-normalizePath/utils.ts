export function toAbsolutePath(path: string): string {
  // 절대 경로가 적용된 모의 함수
  return `/absolute${path}`;
}

export function cleanUrl(url: string): string {
  // http:/** 형태로 만드는 모의 함수
  return url.replace("https://", "http://");
}
