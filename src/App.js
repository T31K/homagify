import { useEffect } from "react";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import "./App.scss";
import "./styles/login.css";

import Login from "./components/auth/Login";
import Main from "./components/Main";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div className="App">{token ? <Main /> : <Login />}</div>;
}

export default App;
