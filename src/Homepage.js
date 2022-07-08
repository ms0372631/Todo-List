import React, { useState, userContext, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoContext } from "./Todo";

export default Homepage => {
  
  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
 
  useEffect(() => {
    todoLists.sort((a, b) => a.number - b.number);
    console.log(todoLists)
    console.log("yo")
  }, [todoLists]);
  
  const getValue = () => {
    return {
      todoLists,
    }
  }

  let component = todoLists.length === 0 ? <h1>No Todos Here...</h1> : todoLists.map(todo => <Todo id={todo.id} name={todo.name} doneStatus={todo.doneStatus} number={todo.number}/>);

  return (
    <>
      {component}
      <div>
        <input 
          type="text" 
          placeholder="Come on!!!" 
          value={inputWord} 
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button onClick={() => {setTodoLists([...todoLists, {name: inputWord, doneStatus: false, number: 1}]), setInputWord("")}}>Submit</button>
      </div>
    </>
  )
}

