import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Reducers/user';

export default function Login() {
  const [error, setError]  = useState(null);
  const [form, setForm]    = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();
  const nav      = useNavigate();

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [key]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(user => dispatch(login(user)));

        setForm({
          username: '',
          password: ''
        });
        
        setError(null);

        nav('/dashboard');
      }
      else
        r.json().then(json=>setError(json.error));
    });
    
  };

  const handleClick = () => {
    nav('/signup');
  };

  const {username, password} = form;


  return (
    <div>
      <h1 style={{color: 'rgb(25, 100, 25)'}}>Welcome to CaddyShack!</h1>
      <h4>Don't have an account?</h4>
      <button onClick={handleClick}>Sign Up</button>
      
      <form className='box' onSubmit={handleSubmit} >
        <h1>Golfer</h1>
        <h1>Login</h1>

        <label>
          Username:
          <input 
            name='username'
            type='text' value={username} 
            autoComplete='off'
            onChange={handleChange} 
          />
        </label>

        <label>
          Password:
          <input 
            name='password'
            type='password' 
            value={password} 
            onChange={handleChange} 
          />
        </label>
        
        {error ? <h5>{error}</h5> : null}

        <input type="submit" value="Login" />
       
      </form>
    </div>
  )
}
