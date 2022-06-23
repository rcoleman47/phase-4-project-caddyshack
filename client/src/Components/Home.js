import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { setCourses } from '../Reducers/golf';
import { logout } from '../Reducers/user';
// import { authorize } from '../Reducers/auth';

export default function Home() {
  const user     = useSelector(state => state.user.value);
  
  const dispatch = useDispatch();
  const nav      = useNavigate();

  useEffect(() => {
    fetch('/tee_boxes')
    .then(r => r.json())
    .then(data => dispatch(setCourses(data)));
  }, []);

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    });

    dispatch(logout());
    //dispatch(authorize());  

    nav('/login'); 
  };

  const navStyle = ({isActive})=>({color: isActive ? "charcoal":"black"});

  return (
    <>
      <h1>ScoreCaddie {user.username}!</h1>
      <button onClick={handleLogout} >Logout</button>
      <div className='navbar'>
        <NavLink style={navStyle} to='/dashboard'>Dashboard</NavLink>
        <NavLink style={navStyle} to='/courses'>Courses</NavLink>
        <NavLink style={navStyle} to='/rounds'>Rounds</NavLink>
      </div>

      <Outlet />
    </>
  )
}
