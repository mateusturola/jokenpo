import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGame extends Component {
  render() {
    const { name, getUserGame } =this.props;
    return (
      <button type="button" onClick={() => getUserGame(name) } >
        {name}
      </button>
    );
  }
}

ButtonGame.propTypes = {
  name: PropTypes.string.isRequired,
  getUserGame: PropTypes.func.isRequired,
};

export default ButtonGame;