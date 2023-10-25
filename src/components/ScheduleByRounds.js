
import Game from './Game'
import Round from './Round'

function SchedulByRounds({ schedule, players }) {
    let round_lines = schedule.rounds.map((round) => {
        return <Round key={round.id} schedule={schedule} round = {round} players={players}/>;       
    });

    return (
        <div>
            {round_lines}
        </div>
    );
}

export default SchedulByRounds;