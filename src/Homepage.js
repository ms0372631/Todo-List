import React, { useState, userContext, useEffect } from "react";
import { Todo } from "./Todo";

import { TodoContext } from "./Todo";

export default Homepage => {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [orderChanged, setOrderChanged] = useState(false);
  
  let newTodoLists = todoLists.slice().sort(function (a, b) {
    return a.number - b.number;
  });

  useEffect(() => {
    console.log(todoLists);
  }, [todoLists]);

  const getValue = () => {
    return {
      todoLists,
    }
  }


  let component = todoLists.length === 0 ? 
    <h1>No Todos Here...</h1> 
    : 
    newTodoLists.map((todo, idx) => (
    <Todo 
      key={todo.id}
      id={todo.id}
      name={todo.name} 
      doneStatus={todo.doneStatus}
      number={todo.number} 
      setTodoLists={setTodoLists} 
      todoLists={todoLists}
    />
    ));
  
  return (
    <>
      {component}
      <div>
        <input 
          type="text" 
          placeholder="Come on!!! "
          value={inputWord} 
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button onClick={() => {setTodoLists([...todoLists, {id: Date.now(), name: inputWord, doneStatus: false, number: 1}]), setInputWord("")}}>Submit</button>
      </div>
    </>
  )
}

