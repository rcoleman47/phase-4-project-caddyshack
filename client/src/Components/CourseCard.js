

export default function CourseCard({course}) {
  const {course_name, image, city, state, address, par, tee, total_distance, color } = course
  console.log(course)

  return (
    <div className="courseCard">
      <img src={image} alt={course.course_name} width="300" height="250"  />

      <h3>{course_name}</h3>

      <h5>
        {address}
        <br />
        {city}, {state}
      </h5>

      <p>Par: {par}</p>
      <p>Tee Box: {tee}</p>
      <p>Tee Color: {color}</p>
      <p>Total Distance: {total_distance} yards</p>

    </div>
  )
}
