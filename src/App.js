import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";

const App = () => {
  const isAuth = useSelector((state) => state.Authentication.AuthState);

  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
};

export default App;
