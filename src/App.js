import './App.css';

import Players from './components/Players.js';
import ScheduleByPlayers from './components/ScheduleByPlayers.js'
import ScheduleByRounds from './components/ScheduleByRounds.js'
import OpponentsMatrix from './components/OpponentsMatrix'

// Navigation and links
import { BrowserRouter} from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  const players_json = require("./data/players.json");
  const people = players_json.people;
  const schedule_json = require("./data/schedule.json")
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
          <Route path="/load" element={<h2>TODO: load schedule JSON</h2>} />
          <Route path="/players" element={<Players players={people} />} />
          <Route path="/schedule_players" element={<ScheduleByPlayers schedule={schedule_json} players={people} />} />
          <Route path="/schedule_rounds" element={<ScheduleByRounds schedule={schedule_json} players={people} />} />
          <Route path="/stats_pair_matrix" element={<OpponentsMatrix schedule={schedule_json} players={people} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

