import { useEffect, useState } from "react";
import "./App.css";
import { fetchPostsAction, fetchpostAction } from "./redux/action/AsyncAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);
  const { loading, error, post, posts } = useSelector((data) => data);
  // console.log(loading, error, post, posts);

  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = () => {
    dispatch(fetchpostAction(search));
    setSearch("");
  };
  return (
    <div>
      <nav id="nav">
        <h1>React Redux Post with thunk fetch API data</h1>
        <input
          type="text"
          placeholder="Search for post"
          onChange={handleChange}
          value={search}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </button>
      </nav>
      <h1>Total Post {posts.length}</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <div>
          {posts.map((item) => {
            return (
              <div id="post-list" key={item.id}>
                <h3>
                  {item.id}. {item.title}
                </h3>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
