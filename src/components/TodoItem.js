import React from "react";

export const TodoItem = (
  id,
  text,
  completed,
  toggleTodoComplete,
  removeTodo
) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text} </span>
      <span
        className="delete"
        style={{ color: "red" }}
        onClick={() => removeTodo(id)}
      >
        &times;
      </span>
    </li>
  );
};
