import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TopicPickerComponent extends Component {
  constructor(props) {
    super(props)
  }
  showGroups() {
    console.log(this.props.group)
    return this.props.group && this.props.group.map(group => {
      return <h3 key={group.id}><Link to={`/game/${group.id}`}>{group.name}</Link></h3>;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Topics</h1>
          {this.showGroups()}
      </div>
    );
  }
}

const mapStateToProps = ({ group }) => ({ group });

const TopicPicker = connect(mapStateToProps)(TopicPickerComponent);

export default TopicPicker;
