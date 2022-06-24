export default function ScorecardHoles({hole, setEdit}) {
  const {id, hole_number, gir, fir, putts, score} = hole;

  const handleClick = (e) => {
    console.log(id)
    
    setEdit(e => !e);
  };

  return (
    <div className="dashboard">
      <table>
        <thead>
          <tr>
            <th>Hole: {hole_number}</th>
          </tr>
          <tr>
            <th>Score: {score}</th>
          </tr>
          <tr>
            <th>GIR: {gir ? "Yes" : "No" }</th>
          </tr>
          <tr>
            <th>FIR: {fir ? "Yes" : "No" }</th>
          </tr>
          <tr>
            <th>Putts: {putts}</th>
          </tr>
        </thead>
      </table>
      <button onClick={handleClick}>Edit Hole</button>
    </div>
  )
}

