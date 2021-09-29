import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <h1>ReactRedux</h1>
      </div>
      <div className={styles.links}>
        <p>Users</p>
        <p>admin</p>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Header;
