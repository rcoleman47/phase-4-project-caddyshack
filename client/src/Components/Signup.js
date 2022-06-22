import { useState } from 'react'

export default function Signup({ setUser }) {
  const [error, setError]  = useState(null);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const {username, email, password} = form;

  const handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value
    setForm({
      ...form,
      [key]: value
    });
  };

  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(r => setUser(r))
        
        setForm({
          username: '',
          email: '',
          password: ''
        });
        
        setError(null);
      }
      else
        r.json().then(json=>setError(json.error))
    });
    
  };


  return (
    <div>
     
      <form className='box' onSubmit={handleSubmit} >
        <h1>Sign Up</h1>

        <label>
          Username:
          <input 
            name='username'
            type='text' value={username} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Email Address:
          <input 
            name='email'
            type='text' 
            value={email} 
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

        <input type="submit" value="Create" />
        {error ? <div>{error}</div> : null}
      </form>
    </div>
  )
}
