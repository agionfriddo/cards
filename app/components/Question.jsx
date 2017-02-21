import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { setNextQuestion } from '../reducers/currentQuestion';

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.props.socket.on('nextQuestion', () => {
      window.setTimeout(this.props.setNextQuestion, 3000);
    });
  }

  showQuestion() {
    if (this.props.currentQuestion === this.props.questionList.length) {
      return (
        <div id="question-container">
          <Card zDepth={5}>
            <CardTitle className="question-title">GAME OVER!</CardTitle>
            <CardText style={ {'fontSize': '3em'} }>{this.props.currentGame.status}</CardText>
          </Card>
        </div>
      );
    }
    if (this.props.questionList.length) {
      return (
        <Card zDepth={5}>
          <CardTitle className="question-title">Current Question</CardTitle>
          <CardText style={ {'fontSize': '3em'} }>{this.props.questionList[this.props.currentQuestion].content}</CardText>
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

const mapStateToProps = ({ questionList, currentQuestion, socket, currentGame }) => ({ questionList, currentQuestion, socket, currentGame });
const mapDispatchToProps = (dispatch) => ({ setNextQuestion: setNextQuestion(dispatch) });
const Question = connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);

export default Question;
