import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      answer: '',
      points: 0,
      group_id: 0
    };
  }

  render() {
    return (
      <div className="col-md-8">
        <h3>Add a Question Below</h3>
          <div className="form-group">
            <select className="form-control" id="sel1">
              <option>Select a Group of Questions to Add To</option>
              {
                this.props.group.map(group => (
                  <option key={group.id} value={group.id}>{group.name}</option>
                ))
              }
            </select>
          </div>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows="3" id="content" />
            <label className="mdl-textfield__label" htmlFor="content">Question...</label>
          </div>
        </form>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows="3" id="answer" />
            <label className="mdl-textfield__label" htmlFor="answer">Answer...</label>
          </div>
        </form>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="points" />
            <label className="mdl-textfield__label" htmlFor="points">Point Value...</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
        </form>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Create Question
        </button>
      </div>
    );
  }

}

const mapStateToProps = ({ group }) => ({ group });

const QuestionForm = connect(mapStateToProps)(QuestionFormComponent);

export default QuestionForm;
