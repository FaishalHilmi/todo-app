import React from "react";

function CardResult({ todoData, handleDelete, handleCompleted }) {
  return (
    <div className="result flex justify-between gap-2 items-center mb-3">
      <div className="todo flex flex-col">
        <span className="text-white capitalize mb-1">{todoData.todo}</span>
        <div>
          <small
            className={`${
              !todoData.finished ? "text-red-500" : "text-blue-500"
            } bg-white p-1 rounded`}
          >
            {!todoData.finished ? "Uncompleted" : "Completed"}
          </small>
        </div>
      </div>
      <div className="button ">
        <div className="wrap flex gap-2">
          <button
            className="bg-white py-1 px-2 rounded"
            onClick={() => handleCompleted(todoData.id)}
          >
            {todoData.finished ? "Completed" : "Uncompleted"}
          </button>
          <button
            className="text-white py-1 px-2 rounded border"
            onClick={() => handleDelete(todoData.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardResult;
