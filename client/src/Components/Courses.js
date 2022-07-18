import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';


export default function Courses() {

  const courses       = useSelector(state => state.golf.courses);
  console.log(courses)

  const renderCourses = courses ? courses.map( course => <CourseCard key={course.id} course={course} />) : <li>Loading...</li>;

  return (
    <div className='courseContainer'>
      {renderCourses}
    </div>
  )
}
