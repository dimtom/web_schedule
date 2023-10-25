
function ScheduleByPlayers({ schedule, players }) {
    let table_lines = players.map(player => {
        let player_name = player.name;

        let player_rounds = schedule.rounds.map((round) => {
            let player_table = -1;
            let player_slot = -1;

            for (let table_num = 0; table_num < round.gameIds.length; table_num++) {
                let game_id = round.gameIds[table_num];
                let game = schedule.games[game_id];
                for (let slot_id = 0; slot_id < 10; slot_id++) {
                    if (game.players[slot_id] === player.id) {
                        player_table = table_num;
                        player_slot = slot_id;
                    }
                }
            }

            let table_str = (player_table >= 0) ? String.fromCharCode("A".charCodeAt(0) + player_table) : "*";
            let slot_str = (player_slot >= 0) ? player_slot + 1 : "*";
            return <td key={player_name+round.id}>{table_str}:{slot_str}</td>
        });

        return (
            <tr key={player.id}>
                <td key={player.id}>{player_name}</td>{player_rounds}
            </tr>);
    });

    // Round nums for header
    let header_rounds = schedule.rounds.map((round) => {
        return <th key={round.id}>R:{round.id + 1}</th>;
    });

    return <table>
        <thead>
            <tr key="header">
                <th>Player name</th>
                {header_rounds}
            </tr>
        </thead>
        <tbody>
            {table_lines}
        </tbody>
    </table>;
}

export default ScheduleByPlayers;