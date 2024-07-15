import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react";
import List from "./List";
import { todoData } from "../mocking/todo-data";

describe("리스트 관련 테스트 모음", () => {
  // TEST1: 렌더링 확인 - List 컴포넌트가 주어진 todoData를 기반으로 정확히 렌더링되는지 확인한다.
  it("모킹 데이터가 모두 올바르게 렌더링되었는지", () => {
    //Jest의 jest.fn()을 사용하여 모의 함수를 생성.
    //이 함수는 실제 onChange 콜백의 역할을 대신하며, 테스트 중에 호출 여부와 인자들을 추적할 수 있음.
    const mockOnChange = jest.fn();

    act(() => {
      render(<List tasks={todoData} onChange={mockOnChange} />);
    });

    // 각 항목이 정확히 렌더링되었는지 확인하기 위해 제목(title)을 가진 각 할 일 항목을 찾는다.
    // screen.getByText : 특정 텍스트를 가진 요소를 화면에서 찾아주는 역할.
    todoData.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });

  // TEST2: 체크박스 상태 변경 확인 - 각 할 일 항목의 체크박스를 클릭할 때마다 onChange 핸들러가 호출되고, 호출 시 올바른 인자를 전달하는지 검증한다.
  it("체크박스를 클릭할 때마다 이벤트 핸들러가 호툴되었는지", () => {
    const mockOnChange = jest.fn();

    act(() => {
      render(<List tasks={todoData} onChange={mockOnChange} />);
    });

    // 각 체크박스 클릭 이벤트 발생
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
      act(() => {
        fireEvent.click(checkbox);
      });

      // onChange 핸들러 호출 검증
      expect(mockOnChange).toHaveBeenNthCalledWith(
        index + 1, // 호출 순서
        todoData[index].id, // 첫 번째 인자: 할 일 항목의 ID
        !todoData[index].isDone // 두 번째 인자: 체크박스 클릭 후의 반전된 상태
      );
    });

    // onChange 핸들러가 todoData의 항목 수만큼 정확히 호출되었는지 확인.
    expect(mockOnChange).toHaveBeenCalledTimes(todoData.length);
  });
});
