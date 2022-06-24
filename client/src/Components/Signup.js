import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Reducers/user';
// import { authorize } from '../Reducers/auth';

export default function Signup() {
  const [error, setError]  = useState(null);
  const [form, setForm]    = useState({
    username: '',
    email: '',
    password: ''
  });


  const dispatch = useDispatch();
  const nav      = useNavigate();


  const handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value
    setForm({
      ...form,
      [key]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(r => dispatch(login(r)));
        
        // dispatch(authorize());
        
        setForm({
          username: '',
          email: '',
          password: ''
        });
        
        setError(null);
        
        nav('/');
      }
      else
        r.json().then(json=>setError(json.error))
    });
    
  };

  const handleClick = () => {
    nav('/login');
  };

  const {username, email, password} = form;

  const passwordError = error ? error.filter( e => e.includes('Password') ) : null;
  const emailError    = error ? error.filter( e => e.includes('Email') )    : null;
  const usernameError = error ? error.filter( e => e.includes('Username') ) : null;

  return (
    <div>

      <h1 style={{color: 'rgb(25, 100, 25)'}}>Welcome to CaddyShack!</h1>
      <h4>Have an account?</h4>
      <button onClick={handleClick}>Login</button>
    
      <form className='box' onSubmit={handleSubmit} >
        <h1>Sign Up</h1>

        <label className={usernameError ? "error" : "success"}>

          {usernameError ? usernameError[0] : "Username:"}

          <input 
            name='username'
            type='text' value={username} 
            onChange={handleChange} 
          />
        </label>

        <label className={emailError ? "error" : "success"}>

          {emailError ? emailError[0] : "Email Address:"}

          <input 
            name='email'
            type='text' 
            value={email} 
            onChange={handleChange} 
          />
        </label>

        <label className={passwordError ? "error" : "success"}>

          {passwordError ? passwordError[0] : "Password:"}

          <input 
            name='password'
            type='password'
            value={password} 
            onChange={handleChange} 
          />
        </label>

        <input type="submit" value="Create" />
      
      </form>
    </div>
  )
}
