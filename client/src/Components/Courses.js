import { useEffect } from 'react'

export default function Courses() {

  useEffect(() => {
    fetch('/courses')
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>Courses</div>
  )
}
