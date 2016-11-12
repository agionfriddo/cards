import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNextQuestion } from '../reducers/currentQuestion';
import { callAddToMyPoints } from '../reducers/currentGame'


class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      typing: false,
    };
    this.setInput = this.setInput.bind(this);

    this.props.socket.on('nextQuestion', () => {
      this.props.setNextQuestion();
    });
  }

  componentDidUpdate() {
    this.props.socket.emit('input', { opponentText: this.state.input });
    }

  setInput(e) {
    this.setState({ input: e.target.value });
    const answer = this.props.questionList[this.props.currentQuestion] && this.props.questionList[this.props.currentQuestion].answer;
    if (this.state.input === answer) {
      e.target.value = ''
      this.props.callAddToMyPoints();
      this.props.socket.emit('correct', { opponentPoints: this.props.currentGame.myPoints + 1 });
    }
  }

  showWinOrLose() {
    if (this.props.currentQuestion === this.props.questionList.length) {
      if (this.props.currentGame.myPoints > this.props.currentGame.opponentPoints) {
        return <h1>YOU WIN! :D</h1>;
      }
      else {
        return (
          <h1>YOU LOSE! D:</h1>
        );
      }
    }
  }


  render() {
    return (
      <div>
      <h1>Me</h1>
      <div>My Points: {this.props.currentGame.myPoints}</div>
        <div className="mdl-textfield mdl-js-textfield">
          <form action="#">
            <input id="myInput" className="mdl-textfield__input" type="text" onChange={this.setInput} />
            <label htmlFor="myInput" className="mdl-textfield__label">Text...</label>
          </form>
        </div>
        <div>
          {this.showWinOrLose()}
        </div>
        </div>
    );
  }

}

const mapStateToProps = ({ questionList, currentQuestion, currentGame, socket }) => ({ questionList, currentQuestion, currentGame, socket });
const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: setNextQuestion(dispatch),
  callAddToMyPoints: callAddToMyPoints(dispatch)
});
const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);

export default Player;
