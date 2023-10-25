import './App.css';
import Players from './Players.js';
import ScheduleByPlayers from './ScheduleByPlayers.js'
import ScheduleByRounds from './ScheduleByRounds.js'
import OpponentsMatrix from './OpponentsMatrix'

export default function App() {
  function handleTabChange(name) { 
    let tabName = "Tab" + name
    

    // hide all tabs except current one
    var tabs = document.getElementsByClassName("tabcontent");
    for (let tab of tabs) {
      tab.style.display = (tab.id === tabName) ? "block" : "none";
    }
  
    // deactivate all buttons except current one
    /*
    let buttonName = "Button" + name
    let buttons = document.getElementsByClassName("tablink");
    for (let button of buttons) {
      if (button.id === buttonName)
        button.className = button.className.replace(" active", "")
      else
        button.className += " active";
    }*/
  }

  const players_json = require("./data/players.json");
  const people = players_json.people;
  const schedule_json = require("./data/schedule.json")
  return (
    <div className="App">
      <h1>Mafia schedule portal</h1>
      <div className="tab">
        <button className="tablink" id="ButtonLoad"  onClick={()=>handleTabChange("Load")}>Load </button>
        <button className="tablink" id="ButtonPlayers"  onClick={()=>handleTabChange("Players")}>Players</button>
        <button className="tablink" id="ButtonSchedulePlayers"  onClick={()=>handleTabChange("SchedulePlayers")}>Schedule - Players</button>
        <button className="tablink" id="ButtonScheduleRounds"  onClick={()=>handleTabChange("ScheduleRounds")}>Schedule - Rounds</button>
        <button className="tablink" id="ButtonOpponentsMatrix" onClick={()=>handleTabChange("OpponentsMatrix")}>Opponents matrix</button>
      </div>

      <div id="TabLoad" className="tabcontent">
        <h2>TODO: load schedule JSON</h2>
      </div>

      <div id="TabPlayers" className="tabcontent">
        <h2>List of players</h2>
        <Players players={people} />
      </div>

      <div id="TabSchedulePlayers" className="tabcontent">
        <h2>Schedule by Players</h2>
        <ScheduleByPlayers schedule={schedule_json} players={people} />
      </div>

      <div id="TabScheduleRounds" className="tabcontent">
        <h2>Scheule by Rounds</h2>
        <ScheduleByRounds schedule={schedule_json} players={people} />
      </div>

      <div id="TabOpponentsMatrix" className="tabcontent">
        <h2>Opponents matrix</h2>
        <OpponentsMatrix schedule={schedule_json} players={people} />
      </div>
    </div>
  );
};

