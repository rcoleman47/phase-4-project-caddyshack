import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { setCourses, setRounds } from '../Reducers/golf';
import { logout } from '../Reducers/user';

export default function Home() {
  const user         = useSelector(state => state.user.value);

  
  const dispatch     = useDispatch();
  const nav          = useNavigate();

  const navStyle     = ({isActive})=>({color: isActive ? "rgb(25, 100, 25)":"black"});

  useEffect(()       => {
    fetch('/tee_boxes')
    .then(r => r.json())
    .then(courses => dispatch(setCourses(courses)));

    fetch('/rounds')
    .then(r => r.json())
    .then(rounds => dispatch(setRounds(rounds)));
  }, []);

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    });
    
    dispatch(logout()); 
    
    nav('/login'); 
  };

  return (
    <>
      <h1 style={{color: 'rgb(25, 100, 25)'}}>Welcome to CaddyShack {user.username}!</h1>
      <button onClick={handleLogout} >Logout</button>
      
      <div className='navbar'>
        <NavLink style={navStyle} to='/dashboard'>Dashboard</NavLink>
        <NavLink style={navStyle} to='/courses'>Courses</NavLink>
        <NavLink style={navStyle} to='/rounds'>Rounds</NavLink>
        <NavLink style={navStyle} to='/scorecard'>Scorecard</NavLink>
      </div>

      <Outlet />
    </>
  )
}
