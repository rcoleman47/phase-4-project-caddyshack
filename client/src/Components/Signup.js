import { useState } from 'react'

export default function Signup() {
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
        r.json().then(r => console.log(r))
        
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
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >

        <label>
          Username:
          <input 
            name='username'
            type='text' value={username} 
            onChange={handleChange} 
          />
        </label>

        <br />

        <label>
          Email Address:
          <input 
            name='email'
            type='text' 
            value={email} 
            onChange={handleChange} 
          />
        </label>

        <br />

        <label>
          Password:
          <input 
            name='password'
            type='text' 
            value={password} 
            onChange={handleChange} 
          />
        </label>
        
        <br />

        <input type="submit" value="Create" />
        {error ? <div>{error}</div> : null}
      </form>
    </>
  )
}
