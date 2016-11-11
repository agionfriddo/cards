import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callSetOpponentPoints } from '../reducers/currentGame';

class OpponentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false,
      opponentText: '',
      opponentPoints: 0
    };
    this.props.socket.on('opponentTyping', ({ opponentText }) => {
      this.setState({ opponentText });
    });
    this.props.socket.on('plusOpponent', ({ opponentPoints }) => {
      this.setState({ opponentPoints });
      this.props.callSetOpponentPoints(opponentPoints)
    });
  }

  render() {
    return (
      <div>
      <h1>Opponent</h1>
      <p>Opponent Points: { this.state.opponentPoints && this.state.opponentPoints }</p>
        <h4>Oppponent's Answer: {this.state.opponentText}</h4>
      </div>
    );
  }

}

const mapStateToProps = ({ currentGame }) => ({ currentGame })
const mapDispatchToProps = {
  callSetOpponentPoints: callSetOpponentPoints
}

const Opponent = connect(mapStateToProps, mapDispatchToProps)(OpponentComponent);

export default Opponent;
