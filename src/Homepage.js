import React, { useState, userContext } from "react";
import { getConstantValue } from "typescript";
import Todo from "./Todo";

export const TodoContext = React.createContext();

export default function Homepage() {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");
  


  let component = todoLists.length === 0 ? <h1>No Todos Here...</h1> : <Todo />;
  console.log(todoLists);

  return (
    <>
      <TodoContext.Provider value={todoLists}>
        {component}
        <input 
          type="text" 
          placeholder="Come on!!!" 
          value={inputWord} 
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button onClick={() => {setTodoLists([...todoLists, inputWord]), setInputWord("")}}>Submit</button>
      </TodoContext.Provider>
    </>
  )
}

