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
    }
  }
  
  getUserGame = (name) => {
    this.setState({ userGame: name});
  } 

  generateComputerGame = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({ computerGame: options[index] })
  }

  render() {
    const { userGame, computerGame } = this.state;
    return (
      <div>
        <Ring userGame={ userGame } computerGame={ computerGame }   />
        <UserGame userGame={userGame} generateComputerGame={ this.generateComputerGame } />
        <ButtonGame name="Pedra" getUserGame={this.getUserGame } />
        <ButtonGame name="Papel" getUserGame={ this.getUserGame} />
        <ButtonGame name="Tesoura" getUserGame={ this.getUserGame } />
      </div>
    );
  }
}

export default Game;