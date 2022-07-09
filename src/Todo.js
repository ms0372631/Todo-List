import React, { useState, useContext, useEffect } from "react";
export const TodoContext = React.createContext();

export const Todo = ({id, name, done, number, setTodoLists, todoLists}) => {

  const [localNum, setNumber] = useState(number)
  const [localName, setName] = useState(name);
  const [editStatus, setEditStatus] = useState(false);
  const [editName, setEditName] = useState(localName);
  const [doneStatus, setDoneStatus] = useState(done);

  const textStyles = {
    textDecoration: doneStatus ? "line-through" : "none"
  }; 


  useEffect(() => {
    updateTodoList();
  }, [localNum]);

  const updateTodoList = (() => {
    const oldTodoLists = todoLists.filter(todo => todo.id !== id);
    setTodoLists([...oldTodoLists, {id: id, name: editName, doneStatus: doneStatus, number: localNum}]);
  })
 

  const getValue = () => { 
    return {
      name,
      localNum,
      doneStatus,
    }
  }

  let editButton = !editStatus ? 
  <button disabled={doneStatus} onClick={() => setEditStatus(!editStatus)}>edit</button> 
  : 
  <>
    <input 
      type="text"
      value={editName}
      onChange={e => setEditName(e.target.value)}
    /> 
    <button onClick={(e) => {setName(editName), setEditName(""), setEditStatus(!editStatus)}}>submit</button>
  </>;

  return (
    <>
      <TodoContext.Provider value={(getValue())}>
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
          <button>
            delete
          </button>
        </li>
        <br></br>
      </TodoContext.Provider>
    </>
  )
};