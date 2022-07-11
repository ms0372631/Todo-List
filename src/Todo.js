import React, { useState, useEffect } from "react";

export const Todo = ({id, name, done, number, setTodoLists, todoLists}) => {

  const [localNum, setNumber] = useState(number)
  const [localName, setName] = useState(name);
  const [editStatus, setEditStatus] = useState(false);
  const [editName, setEditName] = useState(name);
  const [doneStatus, setDoneStatus] = useState(done);

  const textStyles = {
    textDecoration: doneStatus ? "line-through" : "none"
  }; 

  useEffect(() => {
    updateTodoList();
  }, [localNum, editName, doneStatus]);

  const updateTodoList = (() => {
    let idx = 0, newTodoLists = todoLists.slice();
    for (let i = 0; i < newTodoLists.length; ++i) {
      if (newTodoLists[i].id == id)
        idx = i;
    }
    newTodoLists[idx].name = localName;
    newTodoLists[idx].number = localNum;
    newTodoLists[idx].doneStatus = doneStatus;
    setTodoLists(newTodoLists);
  })

  const deleteTodo = (() => {
    const newTodoLists = todoLists.filter(todo => todo.id !== id);
    setTodoLists([...newTodoLists]);
  })

  const handleEditName = (e) => {
    e.preventDefault();
    setName(editName);
    setEditName("");
    setEditStatus(!editStatus)
  }
 

  let editButton = !editStatus ? 
  <button disabled={doneStatus} onClick={() => setEditStatus(!editStatus)}>edit</button> 
  : 
  <>
    <form onSubmit={(e) => handleEditName(e)}>
      <input 
        type="text"
        value={editName}
        onChange={e => setEditName(e.target.value)}
      /> 
    </form>
  </>;

  return (
    <>
      <li>
        <input 
          type="number" 
          min="0"
          value={localNum} 
          onChange={(e) => {setNumber(parseInt(e.target.value))}}
        />
        <span style={textStyles} onClick={() => setDoneStatus(!doneStatus)}>
          {localName}
        </span>
        {editButton}
        <button onClick={() => deleteTodo()}>
          delete
        </button>
      </li>
      <br></br>
    </>
  )
};