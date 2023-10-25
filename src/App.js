import './App.css'

import {useState} from 'react'


import LoadSchedule from './components/LoadSchedule'
import Players from './components/Players'
import ScheduleByPlayers from './components/ScheduleByPlayers'
import ScheduleByRounds from './components/ScheduleByRounds'
import OpponentsMatrix from './components/OpponentsMatrix'

// Navigation and links
import { BrowserRouter} from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  const [players_json, setPlayersJson] = useState(require("./data/players.json"))
  const people = players_json.people
  const [schedule_json, setScheduleJson] = useState(require("./data/schedule.json"))

  function handleScheduleChanged(newSchedule, newPlayers) {
    console.info("Changing a schedule");

    setScheduleJson(newSchedule);

    // create simple players based on schedule
    if (!newPlayers || !newPlayers.people || newPlayers.people.length !== newSchedule.configuration.numPlayers) {
      console.info("No players JSON specified, so we will create them")
      let numPlayers = newSchedule.configuration.numPlayers;
      newPlayers = {};
      newPlayers.people = new Array(newSchedule.configuration.numPlayers);
      for (let i = 0; i < numPlayers; i++) {
        newPlayers.people[i] = {id:i, name:"Player_"+String(i+1).padStart(0, 2)}
      }
    }
    setPlayersJson(newPlayers);
  }

  return (
    <BrowserRouter baseName="/">
      <div className="App">
        <h1>Mafia schedule portal</h1>
        <nav className="tab">
          <Link className="tablink" to="/load">Load </Link>
          <Link className="tablink" to="/players">Players</Link>
          <Link className="tablink" to="/schedule_players">Schedule - Players</Link>
          <Link className="tablink" to="/schedule_rounds">Schedule - Rounds</Link>
          <Link className="tablink" to="/stats_pair_matrix">Pairs matrix</Link>
        </nav>

        <Routes>
          <Route path="/load" element={<LoadSchedule schedule={schedule_json} onScheduleChanged={handleScheduleChanged}/>}/>
          <Route path="/players" element={<Players players={people} />} />
          <Route path="/schedule_players" element={<ScheduleByPlayers schedule={schedule_json} players={people} />} />
          <Route path="/schedule_rounds" element={<ScheduleByRounds schedule={schedule_json} players={people} />} />
          <Route path="/stats_pair_matrix" element={<OpponentsMatrix schedule={schedule_json} players={people} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

