import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ring extends Component {
  render() {
    const { computerGame, userGame, gameDone } = this.props;
    return (
      <div>
        { gameDone ? `${computerGame} X ${userGame}` : "Teste"}
      </div>
    );
  }
}

Ring.propTypes = {

};

export default Ring;