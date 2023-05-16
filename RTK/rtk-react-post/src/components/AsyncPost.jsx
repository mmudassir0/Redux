import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux/Slice/asyncPost";
const AsyncPost = () => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  const changeHandle = (event) => {
    setsearch(event.target.value);
  };
  const output = () => {
    dispatch(fetchPost());
  };
  const post = useSelector((state) => state);
  const { loading, posts, error } = post.asyncPost;
  const apiPost = posts.data;
  console.log(loading, error, posts.data);
  return (
    <div>
      <h2>Async Post</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={changeHandle}
      />
      <button onClick={output}>Search</button>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>{error.message}</h1>
        ) : (
          <div>
            {apiPost.map((item, index) => (
              <div key={index} id="list">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AsyncPost;
