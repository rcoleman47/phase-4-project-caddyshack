import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Reducers/user';
import { authorize } from '../Reducers/auth';
import NavBar from './NavBar';

export default function Home() {
  const user = useSelector(state => state.user.value);
  const auth = useSelector(state => state.auth.value);
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/users/:id`)
      .then((r) => {
        if(r.ok){ 
          r.json().then(r => dispatch(login(r)));
          dispatch(authorize());
        }
      }
    );
  },[]);

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    })

    dispatch(logout());  

    <Navigate to='/' />  
  };

  console.log(user)

  if(!auth){return <Navigate to='/login' />};

  return (
    <>
      <NavBar />
      <div>Hello {}!! 
        <button onClick={handleLogout} >Logout</button>
      </div>
    </>
  )
}
