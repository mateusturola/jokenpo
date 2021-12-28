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
      <>
        <div className="scoreBoard">
          Comp. {computerScore} | { userScore } You
        </div>
        <div>
          { win !== "" && win }
        </div>
      </>
    );
  }
}

Scoreboard.propTypes = {

};

export default Scoreboard;