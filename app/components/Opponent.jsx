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
    this.props.socket.on('output', data => {
      this.setState({ opponentText: data.output });
    });
    this.props.socket.on('plusOpponent', data => {
      console.log("DATA POINTS LOL", data.opponentPoints)
      this.setState({ opponentPoints:  data.opponentPoints});
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
const mapDispatchToProps = (dispatch) => ({
  callSetOpponentPoints: callSetOpponentPoints(dispatch)
});

const Opponent = connect(null, mapDispatchToProps)(OpponentComponent);

export default Opponent;
