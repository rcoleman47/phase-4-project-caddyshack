import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../Reducers/golf';

export default function CourseForm() {
  const [error, setError]          = useState(null);
  const [form, setForm]            = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    image_url: ''
  });

  const dispatch                   = useDispatch();

  const { name, address, city, state, image_url } = form;

  const handleChange = (e) => {
    let key   = e.target.name;
    let value = e.target.value;
  
    setForm({
      ...form,
      [key]: value
    });
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/courses`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(course => {
          dispatch(addCourse(course))
        })
        setError(null);
      }
      else
        r.json().then(json=>setError(json.error));
    });

  };

  return (
    <div>
    
   
    <form className='scorcard' onSubmit={handleSubmit} >

      <label style={{fontWeight: '600'}}>
        Name:
        <input 
          name='name'
          type='text' 
          value={name} 
          onChange={handleChange} 
          />
      </label>

      <label style={{fontWeight: '600'}}>
        Address:
        <input 
          name='address'
          type='text' 
          value={address} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600'}}>
        City:
        <input 
          name='city'
          type='text' 
          value={city} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600'}}>
        State:
        <input 
          name='state'
          type='text' 
          value={state} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600'}}>
        Course Logo:
        <input 
          name='image_url'
          type='text' 
          value={image_url} 
          onChange={handleChange} 
        />
      </label>
      
      {error ? <h5>{error}</h5> : null}

      <input type="submit" value="Submit" />
     
    </form>
  </div>

  )
}
