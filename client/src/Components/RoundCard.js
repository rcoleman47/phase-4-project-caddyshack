import { useDispatch } from 'react-redux';
import { deleteRound } from '../Reducers/golf';

export default function RoundCard({round}) {
  const {course, tee, score, score_to_par, breakdown, id} = round;

  const dispatch = useDispatch();
  
  const renderHoles = [...breakdown].sort((a, b) => a.hole_number - b.hole_number).map( hole => {
    return (
      <th style={{width: '30px'}} key={hole.id}>{hole.hole_number}</th>
    )
  });

  const renderScore = [...breakdown].sort((a, b) => a.hole_number - b.hole_number).map( hole => {
    return (
      <th style={{width: '30px'}} key={hole.id}>{hole.score}</th>
    )
  });


  const handleClick = () => {
    
    fetch(`/rounds/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(round => dispatch(deleteRound(round)));
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
