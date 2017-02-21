import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card'
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
    const { opponentText, opponentPoints } = this.props.currentGame;
    const { pointsStyle, opponentTextStyle } = style;
    return (
      <Card zDepth={5}>
        <CardHeader title="Opponent" avatar="/default-profile-photo.png">
          <CardTitle style={pointsStyle}>Points: {opponentPoints}</CardTitle>
        </CardHeader>
        <CardText style={opponentTextStyle}>Answer: {opponentText}</CardText>
      </Card>
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

const style = {
  pointsStyle: {
    "fontSize": "40px"
  },
  opponentTextStyle: {
    "fontSize": "30px",
  }
}