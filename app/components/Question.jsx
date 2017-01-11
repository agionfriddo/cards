import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
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
        <Card id="question-container" zDepth={5}>
            <CardTitle className="question-title">Current Question</CardTitle>
            <div id="current-question">
              <CardText style={ {'font-size': '3em'} }>{this.props.questionList[this.props.currentQuestion].content}</CardText>
            </div>
          </Card>
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
