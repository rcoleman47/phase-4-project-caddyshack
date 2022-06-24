import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ScorecardHoles from './ScorecardHoles';





export default function NewScorecardForm() {
  const round = useSelector(state => state.golf.newRound);

  const renderScoreForms = round ? round.breakdown.map( hole => <ScorecardHoles key={hole.id} hole={hole} />) : <li>None</li>

  const nav      = useNavigate();

  const handleClick = () => {
    nav('/dashboard');
    window.location.reload()
  };
  return (
    <div>

       <button onClick={handleClick}>Done</button>
      
      {renderScoreForms}
    </div>
  )
}
