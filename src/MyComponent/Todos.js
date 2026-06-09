import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
    let mystyle={
        minHeight:"46vh",
        margin:"40px auto"
    }
  return (
    <div className="text-center" style={mystyle}>
      <h1 >Todo List</h1>
      <br />
      <br />
      {
      props.todo.length===0?"No Todos to display":
       props.todo.map((todo)=>{ 
        return (
            <div key={todo.sno}>
         
        <TodoItems todo={todo}  onDelete={props.onDelete} /><hr />
        </div>
        );
       })}
     
    </div>
  )
}

export default Todos
