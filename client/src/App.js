import React from 'react';
import './App.css';

import PlayersCard from "./components/PlayersCard";
import NavBar from "./components/NavBar";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        players: []
    }
}

componentDidMount() {
  console.log("cDM is running");

  const getPlayers = () => {
  fetch("http://localhost:5000/api/players")
  .then(res => res.json())
  .then( playerInfo => {
    console.log(playerInfo)
    this.setState({ players: playerInfo })})
  .catch(err => console.log(err));
  }
  getPlayers();
}


  render(){
    return (
      <div className="App">
        <NavBar/>
      <PlayersCard players={this.state.players}/>
      </div>
    );
  }
}
export default App;
