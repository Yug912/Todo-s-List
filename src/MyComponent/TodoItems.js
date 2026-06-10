import React from 'react';

export default function TodoItems(props) {
  return (
    <>
      <h3 className="text-primary fw-bold">
        {props.todo.title}
      </h3>

      <p className="text-muted fs-5">
        {props.todo.desc}
      </p>

      <button
        className="btn btn-danger rounded-pill px-4"
        onClick={() => props.onDelete(props.todo)}
      >
        Delete
      </button>
    </>
  );
}