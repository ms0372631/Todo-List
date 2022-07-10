import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";

export default Homepage => {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [showStatus, setShowStatus] = useState("All");
  const [searchWord, setSearchWord] = useState("");
  const [finalSeachWord, setFinalSearchWord] = useState("");

  let newTodoLists; 

  if (showStatus === "All") {
    newTodoLists = todoLists.slice().filter(todo => todo.name.includes(finalSeachWord)).sort(function (a, b) {
      return a.number - b.number;
    });
  }
  else if (showStatus === "Processing") {
    newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === false && todo.name.includes(finalSeachWord)).sort(function (a, b) {
      return a.number - b.number;
    });
  }
  else if (showStatus === "Done") {
    newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === true && todo.name.includes(finalSeachWord)).sort(function (a, b) {
      return a.number - b.number;
    });
  }

  useEffect(() => {
    if (showStatus === "All") {
      newTodoLists = todoLists.slice().filter(todo => todo.name.includes(finalSeachWord)).sort(function (a, b) {
        return a.number - b.number;
      });
    }
    else if (showStatus === "Processing") {
      newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === false && todo.name.includes(finalSeachWord)).sort(function (a, b) {
        return a.number - b.number;
      });
    }
    else if (showStatus === "Done") {
      newTodoLists = todoLists.slice().filter(todo => todo.doneStatus === true && todo.name.includes(finalSeachWord)).sort(function (a, b) {
        return a.number - b.number;
      });
    }
  }, [showStatus, finalSeachWord, todoLists, inputWord]);
  
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodoLists([...todoLists, {id: Date.now(), name: inputWord, doneStatus: false, number: 1}]);
    setInputWord("");
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setFinalSearchWord(searchWord);
  }

  let component = todoLists.length === 0 ? 
    <h1>No Todos Here...</h1> 
    : 
    <>
      <form onSubmit={((e) => handleSubmitSearch(e))}>
        <input name="search-word" placeholder="Search the to do list" value={searchWord} onChange={(e) => {setSearchWord(e.target.value)}}/>
      </form>
      <br/>
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
        <div style={{color: showStatus === "All" ? "red" : "black"}} onClick={() => setShowStatus("All")}>
          All
        </div>
        <div style={{color: showStatus === "Processing" ? "red" : "black"}} onClick={() => setShowStatus("Processing")}>
          Processing
        </div>
        <div style={{color: showStatus === "Done" ? "red" : "black"}} onClick={() => setShowStatus("Done")}>
          Done
        </div>
      </div>
    </>
  
  return (
    <>
      {component}
      <form onSubmit={(e) => handleSubmitTodo(e)}>
        <input 
          name="submit-word"
          type="text" 
          placeholder="Come on!!! "
          value={inputWord} 
          onChange={(e) => setInputWord(e.target.value)}
        />
      </form>
    </>
  )
}

