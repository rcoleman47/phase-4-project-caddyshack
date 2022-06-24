import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newRound } from '../Reducers/golf';
import { useState } from 'react';
import ScorecardHoles from './ScorecardHoles';
import EditHoleScore from './EditHoleScore';



export default function NewScorecardForm() {
  const [edit, setEdit] = useState(false);

  const round = useSelector(state => state.golf.newRound);



  const renderScoreForms = round ? round.breakdown.map( hole => <ScorecardHoles key={hole.id} setEdit={setEdit} hole={hole} />) : <li>None</li>

  return (
    <div>
      {renderScoreForms}
    </div>
  )
}
