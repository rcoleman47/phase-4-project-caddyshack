import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Reducers/user';
import { authorize } from '../Reducers/auth';

export default function Home() {
  const user     = useSelector(state => state.user.value);
  
  const dispatch = useDispatch();
  const nav      = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    });

    dispatch(logout());
    dispatch(authorize());  

    nav('/login'); 
  };

  return (
    <>
      <h1>ScoreCaddie {user.username}!</h1>
      <button onClick={handleLogout} >Logout</button>

      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/rounds'>Rounds</NavLink>

      <Outlet />
    </>
  )
}
