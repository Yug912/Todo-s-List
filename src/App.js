
import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/header';
import Todos from './MyComponent/Todos';
function App() {
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo",todo);
  }
   let todos = [
        {
            sno:1,
            title:"Go to the market",
            desc:"You need to go to the market to buy food"
        },
        {
            sno:2,
            title:"Go to the park",
            desc:"You need to go to the park to exercise"
        },
        {
            sno:3,
            title:"Go to the mall",
            desc:"You need to go to the mall to buy clothes"
        }
    ]
  return (
    <>
       <Header Title="My Todo List" searchbar={true} />
       <Todos todo={todos} onDelete={onDelete} />
       <Footer />
       
    </>

  );
}

export default App;
