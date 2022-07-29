import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRound, newRound, newRoundCourse } from '../Reducers/golf';
import { useState } from 'react'
import { addCoursePlayed } from '../Reducers/user';

export default function Scorecard() {
  const [form, setForm]  = useState({
    user_id: '',
    course_id: '',
    tee: '',
  });

  const nav              = useNavigate();

  const dispatch         = useDispatch();

  const courses          = useSelector(state => state.golf.courses);
  const user             = useSelector(state => state.user.value);

  const courseSelections = courses.map(course => <option key={course.id}>{course.course_name}</option>);

  const handleChange = (e) => {
    let value  = e.target.value;
    let course = courses.filter(course => course.course_name === value)[0]
    
    dispatch(newRoundCourse(course));

    setForm({
      user_id: user.id,
      course_id: course.course_id,
      tee: course.tee
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/rounds', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    .then(r=> r.json())
    .then(round =>  {
      dispatch(addRound(round))
      dispatch(newRound(round))
      // dispatch(addCoursePlayed(round))
    });
    nav('/scorecard/new');
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} >
        <h2>Select Course:</h2>
          <select onChange={handleChange} >
            <option>Select Course...</option>
            {courseSelections}
          </select>

        <input type="submit" value="Start Round" />
       
      </form>
    </div>
  )
}
