import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

class TopicPickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGroup: 0
    }
    this.selectGroup = this.selectGroup.bind(this);
  }


  showGroups() {
    return this.props.group && this.props.group.map(group => {
      return <Link to={`/game/${group.id}`}><button className="btn btn-default" >{group.name}</button></Link>;
    });
  }

  selectGroup(e) {
    this.setState({ selectedGroup: e.target.value })
  }

  render() {
    return (
      <Card>
        <CardTitle title="Cards" subtitle="A Competitive Multiplayer Flash Card Game for Teachers and Students"/>
        <CardText>Either choose a topic below or click <Link to="/form">manage question groups</Link> above to create your own group of cards!</CardText>
        <CardText>Choose a topic below!</CardText>
        <div className="row topic-list">
        {
          this.props.group.map((group, i) => (
              <Card className="col s4 topic" key={i}>
                <CardTitle>{group.name}</CardTitle>
                <CardText>Category: {group.category}</CardText>
                <Link to={`/game/${group.id}`}>
                  <FlatButton id="home-select-button">
                    Go
                  </FlatButton>
                </Link>
              </Card>
          ))
        }
      </div>


      </Card>
    );
  }
}


// {
//   this.props.group.map(item => (
//     <MenuItem
//       key={item.id}
//       value={item.id}
//       primaryText={item.name}
//       />
//   ))
// }
// <Link to={`/game/${this.state.selectedGroup}`}>
//   <FlatButton id="home-select-button">
//     Go
//   </FlatButton>
// </Link>

const mapStateToProps = ({ group }) => ({ group });

const TopicPicker = connect(mapStateToProps)(TopicPickerComponent);

export default TopicPicker;
