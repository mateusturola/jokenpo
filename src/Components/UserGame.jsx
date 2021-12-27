import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserGame extends Component {
  render() {
    const { userGame } = this.props
    return (
      <div>
        { userGame }
        <button type="button" >
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
