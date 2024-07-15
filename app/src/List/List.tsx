import React from "react";

interface TaskProps {
  id: number;
  title: string;
  isDone: boolean;
}

interface ListProps {
  tasks: TaskProps[];
  onChange: (id: number, isChecked: boolean) => void;
}

const List = ({ tasks, onChange }: ListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={(e) => onChange(task.id, e.target.checked)}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
