import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title or Description cannot be blank");
    } else {
      props.addtodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-4">
      <div className="card border-0 shadow-lg p-4">
        <h3 className="text-center text-primary mb-4">
  Add New Todo
</h3>

        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;