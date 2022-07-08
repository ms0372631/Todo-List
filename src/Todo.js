import React, { useState, useContext } from "react";

export const TodoContext = React.createContext();

export const Todo = ({name, done, number}) => {

  const [localNum, setNumber] = useState(number = 1)
  const [localName, setName] = useState(name);
  const [editStatus, setEditStatus] = useState(false);
  const [edtiName, setEditName] = useState(localName);
  const [doneStatus, setDoneStatus] = useState(done)

  const textStyles = {
    textDecoration: doneStatus ? "line-through" : "none"
  }; 


  const getValue = () => { 
    return {
      name,
      localNum,
      doneStatus
    }
  }
  
  let editButton = !editStatus ? 
  <button disabled={doneStatus} onClick={() => setEditStatus(!editStatus)}>edit</button> 
  : 
  <>
    <input 
      type="text"
      value={edtiName}
      onChange={e => setEditName(e.target.value)}
    /> 
    <button onClick={(e) => {setName(edtiName), setEditName(""), setEditStatus(!editStatus)}}>submit</button>
  </>;

  return (
    <>
      <TodoContext.Provider value={(getValue())}>
        <li>
          <input 
            type="number" 
            value={localNum} 
            onChange={(e) => setNumber(e.target.value)}
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