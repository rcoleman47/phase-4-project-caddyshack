import { useSelector } from 'react-redux';
import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseForm from './CourseForm';


export default function Courses() {
  const [showCourseForm, setShowCourseForm] = useState(false);

  const courses       = useSelector(state => state.golf.courses);

  const renderCourseForm = () => {
    setShowCourseForm(showForm => !showForm)
  }

  const renderCourses = courses ? courses.map( course => <CourseCard key={course.id} course={course} />) : <li>Loading...</li>;

  return (
    <>
      <div>
        <button onClick={renderCourseForm}>Add Course</button>
        {showCourseForm ? <CourseForm /> : ''}
      </div>

      <div className='courseContainer'>
        {renderCourses}
      </div>
    </>
  )
}
