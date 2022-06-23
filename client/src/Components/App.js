import { Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Reducers/user';
import { authorize } from '../Reducers/auth';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Rounds from './Rounds';

function App() {
  const dispatch = useDispatch();
  const nav      = useNavigate();

  useEffect(() => {
    fetch(`/authorized_user`)
      .then((r) => {
        if(r.ok){ 
          r.json().then(userObj => {
            dispatch(login(userObj))
            dispatch(authorize());
            }
          );
        } else{
          nav('/login');
        }
      }
    );
  },[]);
 
  return (
    <div id="appBody">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup  />} />

        <Route index='/' element={<Home />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/rounds' element={<Rounds />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
