import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNextQuestion } from '../reducers/currentQuestion';
import { callAddToMyPoints, callResetPoints } from '../reducers/currentGame';
import { callClearQuestions } from '../reducers/questions';


class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      typing: false,
    };
    this.setInput = this.setInput.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.props.socket.on('nextQuestion', () => {
      document.getElementById('myInput').value = '';
    })
  }

  componentWillUnmount() {
    this.props.socket.emit('leaveRoom', { groupId: this.props.group[0].id });
  }

  setInput(e) {
    this.setState({ input: e.target.value });
    this.props.socket.emit('input', {
      opponentText: this.state.input,
      groupId: this.props.group[0].id
    });
  }
  submitAnswer(e) {
    e.preventDefault();
    document.getElementById('myInput').value = '';
    const answer = this.props.questionList[this.props.currentQuestion].answer;
    if (this.state.input === answer) {
      this.props.callAddToMyPoints();
      this.props.socket.emit('correct', {
        opponentPoints: this.props.currentGame.myPoints,
        groupId: this.props.group[0].id
      });
      this.props.setNextQuestion();
    }
  }

  showWinOrLose() {
    if (this.props.currentQuestion === this.props.questionList.length) {
      if (this.props.currentGame.myPoints > this.props.currentGame.opponentPoints) {
        return <h1>YOU WIN! :D</h1>;
      }
      else if (this.props.currentGame.myPoints < this.props.currentGame.opponentPoints) {
        return (
          <h1>YOU LOSE! D:</h1>
        );
      } else {
        return (
          <h1>Tie Game. :|</h1>
        )
      }
    }
  }

  render() {
    return (
      <div id="player" className="row">
        <div className="col-md-6">
          <div id="game-result">
            {this.showWinOrLose()}
          </div>
          <h1>Me</h1>
            <form action="#" onSubmit={this.submitAnswer}>
              <input
                id="myInput"
                className="form-control"
                type="text"
                onChange={this.setInput}
                placeholder="Answer"
                autoFocus='true'
              />
            <label htmlFor="myInput" className="mdl-textfield__label" />
            </form>
          </div>
          <div id="points-container" className="col-md-6">
            <h3>Points</h3>
            <div id="my-points">{this.props.currentGame.myPoints}</div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({
  questionList, currentQuestion, currentGame, socket, group }) => ({
    questionList, currentQuestion, currentGame, socket, group
  });
const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: setNextQuestion(dispatch),
  callAddToMyPoints: callAddToMyPoints(dispatch)

});
const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);

export default Player;
