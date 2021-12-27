import React, { Component } from 'react';
import ButtonGame from './ButtonGame';
import Ring from './Ring';
import UserGame from './UserGame';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      userGame: "", 
      computerGame: "",
      gameDone: false,
    }
  }
  
  getUserGame = (name) => {
    this.setState({ userGame: name});
  } 

  generateComputerGame = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({ computerGame: options[index], gameDone: true })
  }

  render() {
    const { userGame, computerGame, gameDone } = this.state;
    return (
      <div>
        <Ring userGame={userGame} computerGame={computerGame} gameDone ={ gameDone }  />
        <UserGame userGame={userGame} generateComputerGame={ this.generateComputerGame } />
        <ButtonGame name="Pedra" getUserGame={this.getUserGame } />
        <ButtonGame name="Papel" getUserGame={ this.getUserGame} />
        <ButtonGame name="Tesoura" getUserGame={ this.getUserGame } />
      </div>
    );
  }
}

export default Game;