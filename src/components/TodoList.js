import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleComplete={handleComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
};

export default TodoList;