import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState();
  

  useEffect(() => {
    fetch(`/users/:id`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);


  
  return (
    <div id="appBody">
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
