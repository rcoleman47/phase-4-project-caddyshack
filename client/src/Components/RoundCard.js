export default function RoundCard({round}) {
  const {course, tee, score, score_to_par, breakdown} = round

  const renderHoles= breakdown.map( hole => {
    return (
      <th key={hole.id}>{hole.hole_number}</th>
    )
  })
  const renderScore = breakdown.map( hole => {
    return (
      <th key={hole.id}>{hole.score}</th>
    )
  })

  return (
    <div className="roundCard">
      <table className="first">
        <thead>
          <tr>
            <th>{course}</th>
            <th>Tee Box: {tee}</th>
            <th>Strokes to Par: {score_to_par}</th>
          </tr>
        </thead>
      </table>

      <table className="second">
        <thead>
          <tr>
            <th>Hole:</th>
            {renderHoles}
          </tr>
        </thead>
        <tbody>
          <tr>
          <th>Score:</th>
            {renderScore}
          </tr>
        </tbody>
      </table>
      <h2>Total Score: {score}</h2>
    </div>
  )
}
