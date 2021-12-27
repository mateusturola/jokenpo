import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ring extends Component {
  render() {
    const { computerGame , userGame } = this.props;
    return (
      <div>
        { computerGame } X { userGame }
      </div>
    );
  }
}

Ring.propTypes = {

};

export default Ring;