import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Home({ user, setUser }) {

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
    .then(r=>r.json())
    .then(r=>console.log(r))

    setUser(null);  
    <Navigate to='/' />  
  };

  console.log(user);
  if(!user){
   return <Navigate to='/login' />
  }
  return (
    <>
      <NavBar />
      <div>Hello {user.username}!! 
        <button onClick={handleLogout} >Logout</button>
      </div>
    </>
  )
}
