
function Game({ game, players }) {
    let game_lines = game.players.map((player_id, slot_idx) => {
        let player_name = players[player_id].name;
        return <tr key={slot_idx}>
            <td>({slot_idx + 1}) {player_name}</td>
        </tr>;
    });

    return (
        <div>
            <h3>Game #{game.id}</h3>
            <table border="0">
                <tbody>
                    {game_lines}
                </tbody>
            </table>
        </div>
    );
}

export default Game;