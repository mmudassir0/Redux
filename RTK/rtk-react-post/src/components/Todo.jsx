import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes } from "./redux/Slice/noteSLice";

const Todo = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const handleChange = (event) => {
    setinput(event.target.value);
  };
  const handleClick = () => {
    dispatch(addNotes(input));
    setinput("");
  };
  const notes = useSelector((state) => state);
  const todo = notes ? notes.notes.notes : [];

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>Add Notes</button>
      {todo.map((item, index) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
};

export default Todo;
