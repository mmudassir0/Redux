import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = () => {};
  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  return (
    <div>
      <nav id="nav">
        <h1>React Redux Post with thunk fetch API data</h1>
        <input
          type="text"
          placeholder="Search for post"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </nav>
      <h1>Total Post 100</h1>
      <div id="post-list">
        <h1>Post title</h1>
        <h3>Post body</h3>
      </div>
    </div>
  );
}

export default App;
