import React, { Component } from 'react';
import ButtonGame from './ButtonGame';

class Game extends Component {
  render() {
    return (
      <div>
        <ButtonGame name="Pedra" />
        <ButtonGame name="Papel" />
        <ButtonGame name="Tesoura" />
      </div>
    );
  }
}

export default Game;