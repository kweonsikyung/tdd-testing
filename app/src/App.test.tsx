import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("앱 관련", () => {
  it("앱 제목에 TODO APP이 올바르게 포함되었는지", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("TODO APP");
  });
});
