import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h1 className="text-center text-primary mb-4">
            About My Todo List
          </h1>

          <p className="lead text-center">
            A simple and elegant Todo application built using
            React and React Router.
          </p>

          <hr />

          <h4>Features</h4>

          <ul>
            <li>Add new todos</li>
            <li>Delete completed tasks</li>
            <li>Store todos in Local Storage</li>
            <li>Responsive Bootstrap UI</li>
            <li>React Router navigation</li>
          </ul>

          <div className="text-center mt-5">
  <a
    href="https://www.linkedin.com/in/yug-thakral-a38252317/"
    target="_blank"
    rel="noreferrer"
    className="btn btn-primary btn-lg linkedin-btn"
  >
    Connect on LinkedIn 
  </a>
</div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </div>
    
  );
}