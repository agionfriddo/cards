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

    this.props.socket.on('nextQuestion', data => {
      console.log('YOYOYOYOYO', this.props);
      this.props.setNextQuestion();
    });

  }

  componentDidMount() {

  }

  componentDidUpdate() {
    this.props.socket.emit('input', { input: this.state.input });
    }


  setInput(e) {
    this.setState({ input: e.target.value });
    const answer = this.props.questionList[this.props.currentQuestion].answer;
    if (this.state.input === answer) {
      e.target.value = ''
      this.props.callAddToMyPoints()
      this.props.socket.emit('correct', { points: this.props.currentGame.myPoints + 1 });
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
        </div>
    );
  }

}

const mapStateToProps = ({ questionList, currentQuestion, currentGame }) => ({ questionList, currentQuestion, currentGame });
const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: setNextQuestion(dispatch),
  callAddToMyPoints: callAddToMyPoints(dispatch)
});
const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);

export default Player;
