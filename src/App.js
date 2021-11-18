//import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";

const todos = [
  {text:"Ir de compras", completed:false},
  {text:"Regar Matas", completed:false},
  {text:"Reparar equipo", completed:false}
];

function App() {
  return (
  <React.Fragment>
     <TodoCounter/>
     {/* <TodoSearch/> */}
     <input placeholder="Ingles"/>

     {/* <TodoList>
        {todos.map(todo => (
          <TodoItem/>
        ))}
        <TodoItem/>
        <TodoItem/>
     </TodoList> */}

   {/* <createTodoButton/> */}
   <button>+</button>
  </React.Fragment>
  );
}

export default App;
