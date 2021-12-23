import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (todos, removeTodo, toggleTodoComplete) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
