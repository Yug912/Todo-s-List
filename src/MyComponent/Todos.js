import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {

  return (
    <div className="text-center">
      <h1 >Todo List</h1>
      <br />
      <br />
      {
      props.todo.length===0?"No Todos to display":
       props.todo.map((todo)=>{
        return (
            <div key={todo.sno}>
         
        <TodoItems todo={todo}  onDelete={props.onDelete} />
        </div>
        );
       })}
     
    </div>
  )
}

export default Todos
