import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const [error, setError]  = useState(null);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const nav = useNavigate();

  const {username, password} = form;

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
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(r => setUser(r));
        
        setForm({
          username: '',
          password: ''
        });
        
        setError(null);

        nav('/');
      }
      else
        r.json().then(json=>setError(json.error))
    });
    
  };


  return (
    <div>
      
      <form className='box' onSubmit={handleSubmit} >
        <h1>Golfer</h1>
        <h1>Login</h1>

        <label>
          Username:
          <input 
            name='username'
            type='text' value={username} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Password:
          <input 
            name='password'
            type='text' 
            value={password} 
            onChange={handleChange} 
          />
        </label>
        
        {error ? <div>{error}</div> : null}

        <input type="submit" value="Login" />
       
      </form>
    </div>
  )
}
