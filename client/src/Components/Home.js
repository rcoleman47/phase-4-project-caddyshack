import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Reducers/user';
import { authorize } from '../Reducers/auth';

export default function Home() { 
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    })

    dispatch(logout());
    dispatch(authorize());  

    nav('/login'); 
  };

  return (
    <>
      <h1>ScoreCaddie</h1>
      <button onClick={handleLogout} >Logout</button>
      <Outlet />
    </>
  )
}
