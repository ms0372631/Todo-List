import React, { useState, userContext, useEffect } from "react";
import { Todo } from "./Todo";

import { TodoContext } from "./Todo";

export default Homepage => {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [showStatus, setShowStatus] = useState("All");
  const [searchWord, setSearchWord] = useState("");
  
  let newTodoLists; 

  if (showStatus === "All") {
    newTodoLists = todoLists.slice().sort(function (a, b) {
      return a.number - b.number;
    });
  }
  else if (showStatus === "Processing") {
    newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === false).sort(function (a, b) {
      return a.number - b.number;
    });
  }
  else if (showStatus === "Done") {
    newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === true).sort(function (a, b) {
      return a.number - b.number;
    });
  }

  useEffect(() => {
    if (showStatus === "All") {
      newTodoLists = todoLists.slice().sort(function (a, b) {
        return a.number - b.number;
      });
    }
    else if (showStatus === "Processing") {
      newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === false).sort(function (a, b) {
        return a.number - b.number;
      });
    }
    else if (showStatus === "Done") {
      newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === true).sort(function (a, b) {
        return a.number - b.number;
      });
    }
  }, [showStatus]);

  const getValue = () => {
    return {
      todoLists,
    }
  }


  let component = todoLists.length === 0 ? 
    <h1>No Todos Here...</h1> 
    : 
    <>
      {newTodoLists.map((todo, idx) => (
      <Todo 
        key={todo.id}
        index={idx}
        id={todo.id}
        name={todo.name} 
        done={todo.doneStatus}
        number={todo.number} 
        setTodoLists={setTodoLists} 
        todoLists={todoLists}
      />
      ))}
      <div>
        <div onClick={() => setShowStatus("All")}>
          All
        </div>
        <div onClick={() => setShowStatus("Processing")}>
          Processing
        </div>
        <div onClick={() => setShowStatus("Done")}>
          Done
        </div>
      </div>
    </>
  
  return (
    <>
      {component}
      <input 
        type="text" 
        placeholder="Come on!!! "
        value={inputWord} 
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={() => {setTodoLists([...todoLists, {id: Date.now(), name: inputWord, doneStatus: false, number: 1}]), setInputWord("")}}>Submit</button>
    </>
  )
}

