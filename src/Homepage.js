import React, { useState} from "react";

export default function Homepage() {


  const [todoLists, setTodoLists] = useState([]);
  const [inputWord, setInputWord] = useState("");


  let component;

  if (todoLists.length === 0)
    <h1>No Todos Here...</h1>
  else
    // todoLists.map(todo => )
  return (
    <>
      <h1>No Todos Here...</h1>
      <input 
        type="text" 
        placeholder="Come on!!!" 
        value={inputWord} 
        onChange={(e) => setInputWord(e.target.value)}
      />
      <button onClick={() => {setTodoLists([...todoLists, inputWord]), setInputWord("")}}>Submit</button>
    </>
  )
  }

