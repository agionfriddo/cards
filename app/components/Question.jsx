import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
  }

  showQuestion() {
    if(this.props.currentQuestion === this.props.questionList.length) {
      return (
        <h3>GAME OVER!</h3>
      )
    }
    if (this.props.questionList.length) {
      return (
        <h2>
          Current Question: {this.props.questionList[this.props.currentQuestion].content}
        </h2>
      );
    } else return null;
  }

  render() {
    return (
      <div>
      <h1>Questions</h1>
        {this.showQuestion()}
      </div>
    );
  }

}

const mapStateToProps = ({ questionList, currentQuestion, socket }) => ({ questionList, currentQuestion, socket });
const Question = connect(mapStateToProps)(QuestionComponent);

export default Question;
