import React, { Component } from 'react';
import ButtonGame from './ButtonGame';
import Ring from './Ring';
import Scoreboard from './Scoreboard';
import UserGame from './UserGame';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      userGame: "", 
      computerGame: "",
      gameDone: false,
      userScore: 0,
      computerScore: 0,
      win: ""
    }
  }
  
  getUserGame = (name) => {
    this.setState({ userGame: name});
  } 

  generateComputerGame = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({ computerGame: options[index], gameDone: true })
    setTimeout(() => {
      this.judge();
      }, 500);
  }

  judge = () =>
  {
    const {
      state: {
        userGame,
        computerGame,
      } } = this;

    if (userGame === 'Papel' && computerGame === 'Pedra') {
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else

    if (userGame === 'Tesoura' && computerGame === 'Papel') {
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else

    if (userGame === 'Pedra' && computerGame === 'Tesoura') {
      console.log('pedra e Tesoura');
      this.setState((prev) => ({ win: 'You Win!', userScore: prev.userScore + 1 }))
    } else

    if (userGame === computerGame) {
      console.log('Empate');
      this.setState({ win: 'Tie!' })
    } else {
      this.setState((prev) => ({ win: 'Computer Win!', computerScore: prev.computerScore + 1 }))
    }

  }


  render() {
    const { userGame, computerGame, gameDone, userScore, computerScore, win } = this.state;
    return (
      <div>
        <Scoreboard userScore={userScore} computerScore={computerScore} win={win} />
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