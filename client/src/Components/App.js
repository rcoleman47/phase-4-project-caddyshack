import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setSetUser] = useState();

  useEffect(() => {
    // fetch('/hello')
    //   .then((r) => r.json())
    //   .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
