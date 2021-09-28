import React from "react";
import styles from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className={styles.container}>
      <h1>Redux app</h1>
      <h3>{counter}</h3>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
