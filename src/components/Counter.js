import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../Store/counter-redux";
import styles from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch({ type: counterActions.increment });
  };

  const increaseHandler = () => {
    dispatch({ type: counterActions.increase, payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: counterActions.decrement });
  };
  const toggleCounter = () => {
    dispatch({ type: counterActions.toggle });
  };
  const zero = () => {
    dispatch({ type: counterActions.decZero });
  };
  return (
    <div className={styles.container}>
      <h1>Redux app</h1>

      {show && <h3>{counter}</h3>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounter}>Toggle counter</button>
        <button onClick={zero}>To zero</button>
      </div>
    </div>
  );
};

export default Counter;
