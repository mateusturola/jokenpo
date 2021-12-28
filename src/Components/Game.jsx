import React, { Component } from 'react';
import ButtonGame from './ButtonGame';
import Ring from './Ring';
import Scoreboard from './Scoreboard';
import UserGame from './UserGame';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      userSelectGame:"",
      userGame: "", 
      computerGame: "",
      gameDone: false,
      userScore: 0,
      computerScore: 0,
      win: ""
    }
  }
  
  getUserGame = (name) => {
    this.setState({ userSelectGame: name});
  } 
  
  generateComputerGame = () => {
    const { userSelectGame } = this.state;

    const options = ['Pedra', 'Papel', 'Tesoura'];
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({ userGame: userSelectGame});
    this.setState({ computerGame: options[index], gameDone: true });
    setTimeout(() => this.judge(), 500);
  }

  judge = () => {
    const { userGame, computerGame } = this.state;

    if (userGame === 'Papel' && computerGame === 'Pedra') {
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else if (userGame === 'Tesoura' && computerGame === 'Papel') {
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else if (userGame === 'Pedra' && computerGame === 'Tesoura') {
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else if (userGame === computerGame) {
      this.setState({ win: 'Tie!' })
    } else {
      this.setState((prev) => ({ win: 'Computer Win!', computerScore: prev.computerScore + 1 }))
    }
  }


  render() {
    const { userGame, userSelectGame, computerGame, gameDone, userScore, computerScore, win } = this.state;
    return (
      <div>
        <Scoreboard userScore={userScore} computerScore={computerScore} win={win} />
        <Ring userGame={userGame} computerGame={computerGame} gameDone ={ gameDone }  />
        <UserGame userGame={userSelectGame} generateComputerGame={ this.generateComputerGame } />
        <ButtonGame name="Pedra" getUserGame={this.getUserGame } />
        <ButtonGame name="Papel" getUserGame={ this.getUserGame} />
        <ButtonGame name="Tesoura" getUserGame={ this.getUserGame } />
      </div>
    );
  }
}

export default Game;