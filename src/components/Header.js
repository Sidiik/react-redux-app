import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.Authentication.AuthState);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <h1>ReactRedux</h1>
      </div>
      {isAuth && (
        <div className={styles.links}>
          <p>Users</p>
          <p>admin</p>
        </div>
      )}
      {isAuth ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default Header;
