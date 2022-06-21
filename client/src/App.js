import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setSetUser] = useState();

  useEffect(() => {
    // fetch("/hello")
    //   .then((r) => r.json())
    //   .then((data) => setCount(data.count));
  }, []);

  return (
    <Routes>
      <Route path="/login" component={<Login />} />
      <Route path="/signup" component={<Signup />} />
    </Routes>
  );
}

export default App;
