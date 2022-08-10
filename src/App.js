import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import "./App.scss";

import "./styles/login.css";
import Login from "./views/Login";
import Main from "./views/Main";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      let token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
      localStorage.setItem("token", token);
    } else {
      let token = localStorage.getItem("token");
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div className="App">{token ? <Main /> : <Login />}</div>;
}

export default App;
