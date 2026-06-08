import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {

  return (
    <div>
      <h1>Todo List</h1>
       {props.todo.map((todo)=>{
        return (
            <div key={todo.sno}>
            <h3>{todo.sno}</h3>,
        <TodoItems todo={todo}  onDelete={props.onDelete} />
        </div>
        )
       })}
     
    </div>
  )
}

export default Todos
