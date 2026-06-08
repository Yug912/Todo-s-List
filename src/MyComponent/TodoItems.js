import React from 'react'

export default function TodoItems(props) {
  return (
    <>
    <h1>{props.todo.title}</h1>
    <p>{props.todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(props.todo)}>Delete</button>
    </>
  )
}
