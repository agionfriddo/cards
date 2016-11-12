import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../reducers/groups';

class GroupFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      user_id: null
    };
    this.updateName = this.updateName.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }
  updateName(e) {
    this.setState({ name: e.target.value });
  }
  updateCategory(e) {
    this.setState({ category: e.target.value });
  }

  render() {
    return (
      <div className="col-md-4">
        <h3>Create a Question Group</h3>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea
              className="mdl-textfield__input"
              type="text"
              rows="3"
              id="name"
              onChange={this.updateName}
            />
            <label className="mdl-textfield__label" htmlFor="name">Question Group Name...</label>
          </div>
        </form>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea
              className="mdl-textfield__input"
              type="text"
              rows="3"
              id="category"
              onChange={this.updateCategory}
            />
            <label className="mdl-textfield__label" htmlFor="category">Question Group Category...</label>
          </div>
        </form>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          onClick={() => this.props.createGroup(this.state)}
        >
          Create Question Group
        </button>
      </div>
    );
  }

}

const mapDispatchToProps  = {
  createGroup: createGroup
}

const GroupForm = connect(null, mapDispatchToProps)(GroupFormComponent);
export default GroupForm;
