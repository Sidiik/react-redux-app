import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import counterReducer from "./counter-redux";

const store = configureStore({
  reducer: { counter: counterReducer, Authentication: authReducer },
});

export default store;
