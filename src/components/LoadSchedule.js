import { useState } from 'react';

function LoadSchedule({ schedule, onScheduleChanged }) {
    var [schedule_string, setScheduleString] = useState("");
    var [players_string, setPlayersString] = useState("");

    function handleScheduleChange(event) {
        setScheduleString(event.target.value);
    }

    function handlePlayersChange(event) {
        setPlayersString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let schedule = null
        try {
            schedule = JSON.parse(schedule_string)
        }
        catch(e) {
            console.error("Failed to convert schedule data to JSON");
        }

        let players = null
        try {
            players = (players_string && players_string.length > 0) ? JSON.parse(players_string) : null;
        }
        catch(e) {
            console.error("Failed to convert players data to JSON");
        }

        if (schedule) {
            onScheduleChanged(schedule, players);
        }
    }

    return (<>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Schedule JSON:</label>
            <br/>
            <textarea value={schedule_string} onChange={(e) => handleScheduleChange(e)} cols="80" rows="20"/>
            <br/>
            <label>Players JSON:</label>
            <br/>
            <textarea value={players_string} onChange={(e) => handlePlayersChange(e)} cols="80" rows="20"/>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    </>);
}

export default LoadSchedule;