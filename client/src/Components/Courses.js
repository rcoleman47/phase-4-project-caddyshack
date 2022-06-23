import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';


export default function Courses() {
  const courses     = useSelector(state => state.golf.courses);

  const renderCourses = courses.map( course => <CourseCard key={course.id} course={course} />);

  console.log(courses)

  return (
    <div className='courseContainer'>
      {renderCourses}
    </div>
  )
}
