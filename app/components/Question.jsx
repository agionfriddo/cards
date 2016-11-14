import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setNextQuestion } from '../reducers/currentQuestion';

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.props.socket.on('nextQuestion', () => {
      this.props.setNextQuestion();
    });
  }

  showQuestion() {
    if (this.props.currentQuestion === this.props.questionList.length) {
      return (
        <div id="question-container">
          <h1>GAME OVER!</h1>
        </div>
      );
    }
    if (this.props.questionList.length) {
      return (
      <div id="question-container">
        <h4>Current Question</h4>
        <div id="current-question">
          <h1>{this.props.questionList[this.props.currentQuestion].content}</h1>
        </div>
      </div>
      );
    } else return null;
  }

  render() {
    return (
      <div id="question">
      <h1>Questions</h1>
      <Link to="/home"><p>Return To Topics</p></Link>
        {this.showQuestion()}
      </div>
    );
  }

}

const mapStateToProps = ({ questionList, currentQuestion, socket }) => ({ questionList, currentQuestion, socket });
const mapDispatchToProps = (dispatch) => ({ setNextQuestion: setNextQuestion(dispatch) });
const Question = connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);

export default Question;
