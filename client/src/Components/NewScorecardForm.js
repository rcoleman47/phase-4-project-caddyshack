import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ScorecardHoles from './ScorecardHoles';


export default function NewScorecardForm() {
  const round = useSelector(state => state.golf.newRound);

  const nav   = useNavigate();

  const renderScoreForms = round ? round.breakdown.map( hole => <ScorecardHoles key={hole.id} hole={hole} />) : <li>None</li>;

  const handleClick = () => {
    nav('/rounds');
  };

  return (
    <div className='scorecard'>

      {renderScoreForms}

      <button onClick={handleClick}>Done</button>
      
    </div>
  )
}
