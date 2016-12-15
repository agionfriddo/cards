import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callSetOpponentPoints, callSetOpponentText } from '../reducers/currentGame';

class OpponentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false,
      correct: false
    };
    this.props.socket.on('opponentTyping', ({ opponentText }) => {
      this.props.callSetOpponentText({ opponentText });
    });
    this.props.socket.on('plusOpponent', ({ opponentPoints }) => {
      this.props.callSetOpponentPoints(opponentPoints);
    });
  }

  render() {
    return (
      <div id="opponent" className="row">
          <div className="col s6">
            <h1>Opponent</h1>
            <div id="opponent-answer">
              {
                <h3>{this.props.currentGame.opponentText}</h3>
              }
            </div>
          </div>
          <div className="col s6">
            <div id="opponent-points-container">
              <h3>Points</h3>
              <div id="opponent-points">{this.props.currentGame.opponentPoints}</div>
            </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ currentGame, socket }) => ({ currentGame, socket });
const mapDispatchToProps =  {
  callSetOpponentPoints: callSetOpponentPoints,
  callSetOpponentText: callSetOpponentText
};

const Opponent = connect(mapStateToProps, mapDispatchToProps)(OpponentComponent);

export default Opponent;
