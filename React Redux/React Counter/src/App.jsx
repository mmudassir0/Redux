import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Action";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  return (
    <div>
      <h1>Redux Counter</h1>
      <h4>{counter} </h4>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </div>
  );
}

export default App;
