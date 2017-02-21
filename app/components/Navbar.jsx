import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Nav extends Component {
  constructor() {
    super()
  }

  handleTouchTap() {
    browserHistory.push("/home");
  }

  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Cards</span>}
        onTitleTouchTap={this.handleTouchTap}
        iconElementRight={
          <div>
            <Link to="/form"><FlatButton label="Manage Question Sets" /></Link>
            <Link to="/home"><FlatButton label="Topics" /></Link>
          </div>
        }
      />
    )
  }

}

export default Nav;

const styles = {
  title: {
    cursor: 'pointer'
  }
}

/*
      <Navbar brand='Cards' right className="blue darken-4 navbar">
        <Link to='/form'><NavItem>Manage Question Sets</NavItem></Link>
        <Link to='/home'><NavItem>Topics</NavItem></Link>
      </Navbar*/