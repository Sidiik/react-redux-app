import React from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payload: 5 });
  };

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={styles.container}>
      <h1>Redux app</h1>
      {show && <h3>{counter}</h3>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggle}>Toggle counter</button>
      </div>
    </div>
  );
};

export default Counter;
