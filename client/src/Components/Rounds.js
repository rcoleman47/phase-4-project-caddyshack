import { useSelector } from 'react-redux';
import RoundCard from './RoundCard';

export default function Rounds() {
  const rounds       = useSelector(state => state.golf.rounds);

  const renderRounds = rounds ? rounds.map( round => <RoundCard key={round.id} round={round} />) : <li>Loading...</li>;

  return (
     <div className='roundContainer'>
       {renderRounds}
    </div>
  )
}
