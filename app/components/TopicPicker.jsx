import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class TopicPickerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  showGroups() {
    return this.props.group && this.props.group.map(group => {
      return <Link to={`/game/${group.id}`}><button className="btn btn-default" >{group.name}</button></Link>;
    });
  }

  handleChange(event, index, value) {
    this.setState({ value })
  }

  render() {
    return (
      <Card id="topic-picker-card">
        <CardTitle title="Cards" subtitle="A Competitive Multiplayer Flash Card Game for Teachers and Students"/>
        <CardText>Either choose a topic below or click <Link to="/form">manage question groups</Link> above to create your own group of cards!</CardText>
        <CardText>Choose a topic below!</CardText>
        <div className="row topic-list">
      </div>
      <SelectField
          floatingLabelText="Category"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}>
        {
        this.props.group.map(item => {
          return (
            <MenuItem
              key={item.id}
              value={item.id}
              primaryText={item.name}
              />
            )
          })
        }
        </SelectField>
        <Link to={`/game/${this.state.value}`}>
          <RaisedButton id="home-select-button">
            Go
          </RaisedButton>
        </Link>
        }
    </Card>
    );
  }
}


const mapStateToProps = ({ group }) => ({ group });

const TopicPicker = connect(mapStateToProps)(TopicPickerComponent);

export default TopicPicker;
