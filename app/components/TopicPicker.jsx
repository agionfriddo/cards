import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TopicPickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGroup: 0
    }
    this.selectGroup = this.selectGroup.bind(this);
  }


  showGroups() {
    console.log(this.props.group)
    return this.props.group && this.props.group.map(group => {
      return <Link to={`/game/${group.id}`}><button className="btn btn-default" >{group.name}</button></Link>;
    });
  }

  selectGroup(e) {
    this.setState({ selectedGroup: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <div id="title" className="row">
          <h1>Cards</h1>
          <h4>A Competitive Multiplayer Flash Card Game for Teachers and Students</h4>
          <p>Either choose a topic below or click <Link to="/form">manage question groups</Link> above to create your own group of cards!</p>
        </div>
        <div className="row" id="topic-picker">
          <h3>Choose a topic below!</h3>
            <form className="form-inline">
              <select
                className="form-control" id="sel1"
                onChange={this.selectGroup}
              >
                <option>Topics</option>
                {
                  this.props.group.map(group => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))
                }
              </select>
              <Link to={`/game/${this.state.selectedGroup}`}>
                <button id="home-select-button" className="btn btn-default">
                  Go
                </button>
              </Link>
            </form>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ group }) => ({ group });

const TopicPicker = connect(mapStateToProps)(TopicPickerComponent);

export default TopicPicker;
