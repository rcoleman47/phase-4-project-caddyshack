import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRound } from '../Reducers/golf';

export default function ScorecardHoles({hole}) {
  const [error, setError]  = useState(null);
  const [form, setForm]    = useState({
    gir: hole.gir,
    fir: hole.fir,
    putts: hole.putts,
    score: hole.score
  });

  const {id, hole_number} = hole;

  const { gir, fir, putts, score } = form

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
  
    setForm({
      ...form,
      [key]: value
    });
    console.log(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/scores/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=>{
      if(r.ok){ 
        r.json().then(round => dispatch(addRound(round)));

        setError(null);
      }
      else
        r.json().then(json=>setError(json.error));
    });

  };

  return (
    <div>
    
   
    <form className='course' onSubmit={handleSubmit} >

      <label style={{fontWeight: '600',background: 'white'}}>
        Hole Number:
        <input 
          name='hole_number'
          type='text' value={hole_number} 
          readOnly/>
      </label>

      <label style={{fontWeight: '600',background: 'white'}}>
        Score:
        <input 
          name='score'
          type='number' 
          value={score} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600',background: 'white'}}>
        GIR:
        <input 
          name='gir'
          type='text' value={gir} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600',background: 'white'}}>
        FIR:
        <input 
          name='fir'
          type='text' 
          value={fir} 
          onChange={handleChange} 
        />
      </label>

      <label style={{fontWeight: '600',background: 'white'}}>
        Putts:
        <input 
          name='putts'
          type='number' 
          value={putts} 
          onChange={handleChange} 
        />
      </label>
      
      {error ? <h5>{error}</h5> : null}

      <input type="submit" value="Submit" />
     
    </form>
  </div>

  )
}

