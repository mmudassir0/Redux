import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, postAction } from "./redux/action/notesAction";

function App() {
  const dispatch = useDispatch();
  //to get data from store we use useSelector
  const data = useSelector((storeData) => {
    return storeData;
  });
  const notes = data ? data.posts : [];
  // console.log("data", data.posts);
  console.log("notes", notes);

  const [input, setinput] = useState({
    id: "",
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  }
  function handleClick() {
    dispatch(postAction(input));
    setinput({ id: "", title: "", content: "" });
  }
  const deleteClick = (id) => {
    dispatch(deleteAction(id));
  };
  return (
    <div>
      <h1>Notes keeper</h1>
      <input
        type="text"
        onChange={handleChange}
        value={input.title}
        name="title"
        placeholder="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={input.content}
        name="content"
        placeholder="content"
      />
      <button onClick={handleClick}>Add</button>
      {notes.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              {index + 1}. {item.title} {item.content}
              <button
                onClick={() => {
                  dispatch(deleteClick(item.id));
                }}
              >
                delete
              </button>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
