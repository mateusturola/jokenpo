import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scoreboard extends Component {

 
  render() {
    const {
      props: {
        userScore,
        computerScore, 
        win,
    }} = this;
  
    return (
      <div>
        <div>
          Computer {computerScore} | { userScore } You
        </div>
        <div>
          { win === "" ? "" : win }
        </div>
      </div>
    );
  }
}

Scoreboard.propTypes = {

};

export default Scoreboard;