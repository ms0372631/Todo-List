// functional vs class
// state and lifecycle
import Homepage from "./Homepage";
import React from "react";

export const AppContext = React.createContext();

export default function App() {

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}