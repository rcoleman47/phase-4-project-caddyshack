import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user    = useSelector(state => state.user.value);

  const {rounds_played, courses_played, avg_putts_per_hole, avg_round_score, avg_strokes_to_par, fir_percentage, gir_percentage, handicap } = user;

  const courses = courses_played ? courses_played.map((course, i) => <li key={i}>{course}</li>) : "";

  
  return (
    <div className="dashboardContainer">
      <div className="dashboard">
        <h2>Number of Rounds:</h2>
        <h1>{rounds_played}</h1>
      </div>

      <div className="dashboard">
        <h2>Courses Played:</h2>
        <div className='list-container'>
          <ul>
            {courses}
          </ul>
        </div>
      </div>

      <div className="dashboard">
        <h2>Average Score:</h2>
        <h1>{avg_round_score}</h1>
      </div>

      <div className="dashboard">
        <h2>Strokes to Par:</h2>
        <h1>{avg_strokes_to_par}</h1>
      </div>

      <div className="dashboard">
        <h2>Handicap:</h2>
        <h1>{handicap}</h1>
      </div>

      <div className="dashboard">
        <h2>Putts Per Hole:</h2>
        <h1>{avg_putts_per_hole}</h1>
      </div>

      <div className="dashboard">
        <h2>GIR %:</h2>
        <h1>{gir_percentage}</h1>
      </div>

      <div className="dashboard">
        <h2>FIR %:</h2>
        <h1>{fir_percentage}</h1>
      </div>
    
  </div>
  )
}
