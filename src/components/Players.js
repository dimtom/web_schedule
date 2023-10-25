import './Players.css'

function Players({ players }) {
    const listItems = players.map((player, index) => {
        return <tr key={index}>
            <td>{player.id}</td>
            <td>{player.name}</td>
        </tr>;
    });
    
    return (
        <table border="1">
            <thead>
            <tr key="header">
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {listItems}
            </tbody>
            
        </table>);
}

export default Players;
