import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user    = useSelector(state => state.user.value);

  const {rounds_played, courses_played, avg_putts_per_hole, avg_round_score, avg_strokes_to_par, fir_percentage, gir_percentage, handicap } = user;

  const courses = courses_played ? courses_played.map((course, i) => <li key={i}>{course}</li>) : <li>None</li>;

  
  return (
    <div className="dashboardContainer">
      <div className="dashboard">
        <h2>Number of Rounds Played:</h2>
        <h3>{rounds_played}</h3>
      </div>

      <div className="dashboard">
        <h2>Courses Played:</h2>
        <ul>
          {courses}
        </ul>
        
      </div>

      <div className="dashboard">
        <h2>Average Score:</h2>
        <h3>{avg_round_score}</h3>
      </div>

      <div className="dashboard">
        <h2>Strokes to Par:</h2>
        <h3>{avg_strokes_to_par}</h3>
      </div>

      <div className="dashboard">
        <h2>Handicap:</h2>
        <h3>{handicap}</h3>
      </div>

      <div className="dashboard">
        <h2>Putts Per Hole:</h2>
        <h3>{avg_putts_per_hole}</h3>
      </div>

      <div className="dashboard">
        <h2>GIR Percentage:</h2>
        <h3>{gir_percentage}%</h3>
      </div>

      <div className="dashboard">
        <h2>FIR Percentage:</h2>
        <h3>{fir_percentage}%</h3>
      </div>
    
  </div>
  )
}
