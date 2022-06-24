import { useSelector } from 'react-redux';
import RoundCard from './RoundCard';

export default function Rounds() {
  const rounds = useSelector(state => state.golf.rounds);

  const renderRounds = rounds.map( round => <RoundCard key={round.id} round={round} />);

  return (
     <div className='roundContainer'>
       {renderRounds}
      <h1>New Round</h1>
    </div>
  )
}
