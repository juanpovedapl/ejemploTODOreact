//import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [ 
  {text:"Ir de compras ", completed:false},
  {text:"Regar Matas ", completed:false},
  {text:"Reparar equipo ", completed:false}
];

function App() {
  return (
  <React.Fragment>
     <TodoCounter/>

     <TodoSearch/> 
    
     <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
     </TodoList>

    <CreateTodoButton/> 
   
  </React.Fragment>
  );
}

export default App;
