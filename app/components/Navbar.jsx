import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

class Nav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Navbar brand='Cards' right className="blue darken-4">
        <NavItem><Link to='/form'>Manage Question Sets</Link></NavItem>
        <NavItem><Link to='/home'>Topics</Link></NavItem>
      </Navbar>
    )
  }

}

export default Nav;
