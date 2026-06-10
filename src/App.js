
import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/header';
import AddTodo from './MyComponent/AddTodo';
import Todos from './MyComponent/Todos';
import About from './MyComponent/About';
import {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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
    <Router>
       <Header Title="My Todo List" searchbar={true} />
       <Routes>
  <Route
    exact path="/"
    element={
      <>
        <AddTodo addtodo={addtodo} />
        <Todos todo={todos} onDelete={onDelete} />
      </>
    }
  />

  <Route
    exact path="/about"
    element={<About />}
  />
</Routes>
      
       <Footer />
    </Router>
       
    </>

  );
}

export default App;
