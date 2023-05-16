import "./App.css";
import AsyncPost from "./components/AsyncPost";
import Counter from "./components/counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Redux toolkit with react to fetch API data</h1>
      <hr />
      <Counter />
      <hr />
      <Todo />
      <hr />
      <AsyncPost />
    </div>
  );
}

export default App;
