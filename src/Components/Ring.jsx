import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ring extends Component {
  render() {
    const { computerGame, userGame, gameDone } = this.props;
    return (
      <div>
        { gameDone && `${computerGame} X ${userGame}` }
      </div>
    );
  }
}

Ring.propTypes = {
  computerGame: PropTypes.string.isRequired,
  userGame: PropTypes.string.isRequired,
  gameDone: PropTypes.bool.isRequired
};

export default Ring;