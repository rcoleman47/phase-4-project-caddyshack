import { useState} from 'react';

export default function Login() {
  const [error, setError]  = useState(null);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

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
        r.json().then(r => console.log(r));
        
        setForm({
          username: '',
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
          Password:
          <input 
            name='password'
            type='text' 
            value={password} 
            onChange={handleChange} 
          />
        </label>
        
        <br />

        <input type="submit" value="Login" />
        {error ? <div>{error}</div> : null}
      </form>
    </>
  )
}
