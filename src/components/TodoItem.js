import React from "react";

const TodoItem = ({ todo, index, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div className="todo-wrapper">
      <p className={`${todo.isCompleted ? "completed" : ""}`}>{todo.name}</p>
      <div className="action-wrapper">
        <button className="complete-button" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="edit-button" onClick={() => handleEdit(todo, index)}>
          EDIT
        </button>
        <button className="delete-button" onClick={() => handleDelete(index)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
