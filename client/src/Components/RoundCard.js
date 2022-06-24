import { useDispatch } from 'react-redux';
import { deleteRound } from '../Reducers/golf';

export default function RoundCard({round}) {
  const {course, tee, score, score_to_par, breakdown, id} = round;

  const dispatch = useDispatch();
  
  const renderHoles = breakdown.map( hole => {
    return (
      <th key={hole.id}>{hole.hole_number}</th>
    )
  });

  const renderScore = breakdown.map( hole => {
    return (
      <th key={hole.id}>{hole.score}</th>
    )
  });


  const handleClick = () => {
    console.log(id)

    fetch(`/rounds/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(round => dispatch(deleteRound(round)));

    window.location.reload();
  };

  
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
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}
