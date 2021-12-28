import React, { Component } from 'react';
import ButtonGame from './ButtonGame';
import Ring from './Ring';
import Scoreboard from './Scoreboard';
import UserGame from './UserGame';
import '../Style/game.css'

class Game extends Component {
  constructor() {
    super();
    this.state = {
      userSelectGame:"...",
      userGame: "...", 
      computerGame: "...",
      gameDone: false,
      userScore: 0,
      computerScore: 0,
      win: "..."
    }
  }
  
  getUserGame = (name) => {
    this.setState({ userSelectGame: name, win: "...", userGame: "...", computerGame: "..." });
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
      <>
        <div className="game">
          <div className="header"></div>
          <div className="screen">
          <div className="glass">
            <Scoreboard userScore={userScore} computerScore={computerScore} win={win} />
            <Ring userGame={userGame} computerGame={computerGame} gameDone={gameDone} userSelectGame={ userSelectGame }  />
          </div>
          </div>
          <div className="actions">
            <div className="directions">
              <button type="button" onClick={() => this.generateComputerGame()} className="arrow-top">
                Jokenpô
              </button>
            </div>
            <div className="buttons" >
              <ButtonGame name="Pedra" getUserGame={this.getUserGame } />
              <ButtonGame name="Papel" getUserGame={ this.getUserGame} />
              <ButtonGame name="Tesoura" getUserGame={ this.getUserGame } />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Game;