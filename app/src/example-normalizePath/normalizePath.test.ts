import { normalizePath } from "./normalizePath";

jest.mock("./utils.ts", () => ({
  toAbsolutePath: (path: string) => path,
  cleanUrl: (url: string) => (url ? url.replace("https://", "http://") : null),
}));

describe("테스트 가능성 파악을 위한 normalizePath function example", () => {
  it("clear(http://) 변환되었는지", () => {
    const result = normalizePath("https://example.com");
    expect(result).toBe("http://example.com");
  });

  it("null, undifiend를 잘 처리하는지", () => {
    const result1 = normalizePath(null as any);
    const result2 = normalizePath(undefined as any);
    expect(result1).toBe(null);
    expect(result2).toBe(null); // undefined는 null로 처리되도록 수정
  });
});
