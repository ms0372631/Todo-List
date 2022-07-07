import React, { useState, useContext } from "react";
import { getConstantValue } from "typescript";
import { TodoContext } from "./Homepage";

export default function Todo() {

  return (
    <>
      <TodoContext.Consumer>
        {value => value.map(todo => (<p>{todo}</p>))}
      </TodoContext.Consumer>
    </>
  )
}