
import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/header';
import AddTodo from './MyComponent/AddTodo';
import Todos from './MyComponent/Todos';
import {useState,useEffect} from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addtodo=(title,description)=>{
    let sno;
      if(todos.length===0){
        sno=0;
      }
      else{
      sno=todos[todos.length-1].sno+1;
      }
    const newTodo={
      sno:sno,
      title:title,
      desc:description
    };
    setTodos([...todos,newTodo]);
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  return (
    <>
       <Header Title="My Todo List" searchbar={true} />
       <AddTodo addtodo={addtodo} />
       <Todos todo={todos} onDelete={onDelete} />
       <Footer />
       
    </>

  );
}

export default App;
