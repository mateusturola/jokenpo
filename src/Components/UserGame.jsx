import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserGame extends Component {
  render() {
    const { userGame, generateComputerGame } = this.props
    return (
      <div>
        <button type="button" onClick={() => generateComputerGame() }>
          Jokenpô
        </button>
      </div>
    );
  }
}

UserGame.propTypes = {
  userGame: PropTypes.string.isRequired,
};

export default UserGame;
