
function calcPairMatrix(schedule) {
    let player_count = schedule.configuration.numPlayers;

    // create 2D array of size [player_count X player_count]
    let matrix = new Array(player_count).fill(null);
    for (let i = 0; i < player_count; i++) {
        matrix[i] = new Array(player_count).fill(0);
    }

    // fill matrix with values: number of game p1 and p2 play in the tournament
    for (let game of schedule.games) {
        for (let s1 = 0; s1 < game.players.length; s1++) {
            for (let s2 = 0; s2 < game.players.length; s2++) {
                let p1 = game.players[s1];
                let p2 = game.players[s2];
                if (p1 !== p2) {
                    matrix[p1][p2] += 1;
                }
            }
        }
    }

    return matrix;
}

function OpponentsMatrix({ schedule, players }) {
    let matrix = calcPairMatrix(schedule);
    let header_players = players.map((player) => {
        return <th key={player.id}>{player.id + 1}</th>;
    });

    let matrix_lines = players.map((player) => {
        let pair_items = players.map((p) => {
            let key = "Line" + player.id + "Col" + p.id;
            return <td key={key}>{matrix[player.id][p.id]}</td>;
        });
        return <tr key={player.id}><td>({player.id + 1}) {player.name}</td>{pair_items}</tr>
    });

    return <table>
        {<thead>
            <tr key="header">
                <th>Player name</th>
                {header_players}
            </tr>
        </thead>}
        <tbody>
            {matrix_lines}
        </tbody>
    </table>;
}

export default OpponentsMatrix;