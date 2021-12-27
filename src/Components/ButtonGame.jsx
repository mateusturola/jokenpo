import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGame extends Component {
  render() {
    const { name } =this.props;
    return (
      <button type="button">
        {name}
      </button>
    );
  }
}

ButtonGame.propTypes = {

};

export default ButtonGame;