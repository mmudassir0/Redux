// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/Slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandle = () => {
    dispatch(increment());
  };
  const decrementHandle = () => {
    dispatch(decrement());
  };
  const resetCounterHandle = () => {
    dispatch(reset());
  };
  const incrementByNumberHandle = () => {
    dispatch(incrementByAmount(5));
  };
  const counter = useSelector((state) => state);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter.counter.count ? counter.counter.count : 0}</h1>
      <button onClick={incrementHandle}>Increment</button>
      <button onClick={decrementHandle}>Decrement</button>
      <button onClick={resetCounterHandle}>reset</button>
      <button onClick={incrementByNumberHandle}>Increment By 5</button>
    </div>
  );
};

export default Counter;
