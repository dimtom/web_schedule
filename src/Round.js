import Game from './Game';

function Round({schedule, round, players}) {
    let game_items = round.gameIds.map(id => {
        let game = schedule.games[id];
        return <Game key={game.id} game={game} players={players} />;
    });

    return <div>
        <h2>Round {round.id}</h2>
        <div className="round">
            {game_items}
        </div>
    </div>;
}
export default Round;