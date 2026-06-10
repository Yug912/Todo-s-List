import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
  let mystyle = {
    minHeight: "46vh",
    margin: "40px auto"
  };

  return (
    <div className="container my-5" style={mystyle}>
      <h1 className="text-center mb-4 glow-title">
  Todo List
</h1>

      {props.todo.length === 0 ? (
        <div className="alert alert-secondary text-center">
          No Todos to display
        </div>
      ) : (
        props.todo.map((todo) => {
          return (
            <div
              key={todo.sno}
              className="card border-0 shadow-lg p-4 mb-4"
            >
              <TodoItems
                todo={todo}
                onDelete={props.onDelete}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Todos;