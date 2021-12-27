import React, { Component } from 'react';
import ButtonGame from './ButtonGame';
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
    const options = ['pedra', 'papel', 'tesoura'];
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({ computerGame: options[index] })
  }

  render() {
    const { userGame } = this.state;
    return (
      <div>
        <UserGame userGame={ userGame } />
        <ButtonGame name="Pedra" getUserGame={this.generateComputerGame } />
        <ButtonGame name="Papel" getUserGame={ this.getUserGame} />
        <ButtonGame name="Tesoura" getUserGame={ this.getUserGame } />
      </div>
    );
  }
}

export default Game;