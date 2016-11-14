import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestionsByGroup, createQuestion } from '../reducers/questions';

class QuestionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      answer: '',
      points: 1,
      group_id: null
    };
    this.onSelectGroup = this.onSelectGroup.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
  }
  onSelectGroup(e) {
    this.setState({ group_id: e.target.value });
  }
  loadQuestions() {
    this.props.fetchQuestionsByGroup({ groupId: this.state.group_id });
  }
  updateContent(e) {
    e.preventDefault();
    this.setState({ content: e.target.value });
  }
  updateAnswer(e) {
    e.preventDefault();
    this.setState({ answer: e.target.value });
  }
  sendQuestion(e) {
    e.preventDefault();
    this.props.createQuestion(this.state);
    document.getElementById('answer').value = '';
    document.getElementById('content').value = '';
  }

  render() {
    return (
      <div className="col-md-8">
        <h3>Add a Question Below</h3>
          <div className="form-group">
            <select
              className="form-control" id="sel1"
              onChange={this.onSelectGroup}
            >
              <option>Select a Group of Questions to Add To</option>
              {
                this.props.group.map(group => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))
              }
            </select>
          </div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={this.loadQuestions}
          >
            Select Question Group
          </button>
        <div className="row">
          <div className="col-md-6">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <textarea
                  className="mdl-textfield__input"
                  type="text"
                  rows="3"
                  id="content"
                  onChange={this.updateContent}
                  placeholder="Question..."
                />
                <label className="mdl-textfield__label" htmlFor="content"></label>
              </div>
            </form>
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <textarea
                  className="mdl-textfield__input"
                  type="text" rows="3" id="answer"
                  onChange={this.updateAnswer}
                  placeholder="Answer..."
                />
                <label className="mdl-textfield__label" htmlFor="answer"></label>
              </div>
            </form>
            <button
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
              onClick={this.sendQuestion}
            >
              Create Question
            </button>
          </div>
          <div className="col-md-6">
            {
              this.props.questionList.map(question => {
                return (
                  <div key={question.id}>
                    <h4>{question.content}</h4>
                    <p>{question.answer}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ group, questionList }) => ({ group, questionList });
const mapDispatchToProps = {
  fetchQuestionsByGroup,
  createQuestion
};

const QuestionForm = connect(mapStateToProps, mapDispatchToProps)(QuestionFormComponent);

export default QuestionForm;
