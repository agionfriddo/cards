import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setNextQuestion } from '../reducers/currentQuestion'

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.props.socket.on('nextQuestion', () => {
      console.log("SO MANY TIMES")
      this.props.setNextQuestion();
    });
  }

  showQuestion() {
    if(this.props.currentQuestion === this.props.questionList.length) {
      return (
        <h3>GAME OVER!</h3>
      )
    }
    if (this.props.questionList.length) {
      return (
        <div id="question-container">
          <h4>Current Question</h4>
          <h1>{this.props.questionList[this.props.currentQuestion].content}</h1>
        </div>
      );
    } else return null;
  }

  render() {
    return (
      <div id="question">
      <h1>Questions</h1>
        {this.showQuestion()}
      </div>
    );
  }

}

const mapStateToProps = ({ questionList, currentQuestion, socket }) => ({ questionList, currentQuestion, socket });
const mapDispatchToProps = (dispatch) => ({ setNextQuestion: setNextQuestion(dispatch) });
const Question = connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);

export default Question;
