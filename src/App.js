// functional vs class
// state and lifecycle
import Homepage from "./Homepage";
import React from "react";

export const TodoContext = React.createContext();

export default function App() {
  return (
    <TodoContext.Provider value={{
      todoLists: []
    }}>
      <div className="App">
        <Homepage />
      </div>
    </TodoContext.Provider>
  );
}