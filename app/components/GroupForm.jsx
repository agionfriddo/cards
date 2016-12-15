import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../reducers/groups';

class GroupFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      user_id: 2,
      groupAdded: false
    };
    this.updateName = this.updateName.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.sendGroup = this.sendGroup.bind(this);
  }
  updateName(e) {
    this.setState({ groupAdded: false })
    this.setState({ name: e.target.value });
  }
  updateCategory(e) {
    this.setState({ groupAdded: false })
    this.setState({ category: e.target.value });
  }
  sendGroup(e) {
    this.setState({ groupAdded: true })
    this.props.createGroup(this.state)
  }
  showCreated() {
    if (this.state.groupAdded) {
      return <h4>Group added!</h4>;
    }
  }

  render() {
    return (
      <div className="col m4">
        {this.showCreated()}
        <h3>Create a Question Group</h3>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea
              className="mdl-textfield__input"
              type="text"
              rows="3"
              id="name"
              onChange={this.updateName}
              placeholder="Question Group Name..."
            />
            <label className="mdl-textfield__label" htmlFor="name"></label>
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
              placeholder="Question Group Category..."
            />
            <label className="mdl-textfield__label" htmlFor="category"></label>
          </div>
        </form>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          onClick={this.sendGroup}
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
