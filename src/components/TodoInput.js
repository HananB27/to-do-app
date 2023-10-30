import React from "react";

const TodoInput = ({ task, handleTaskChange, isEditMode, handleSave, handleUpdate }) => {
  return (
    <div>
      <input value={task} onChange={handleTaskChange} />
      <button
        disabled={task.length < 3}
        className="create-button"
        onClick={() => (isEditMode ? handleUpdate() : handleSave())}
      >
        {isEditMode ? "UPDATE" : "CREATE"}
      </button>
    </div>
  );
};

export default TodoInput;