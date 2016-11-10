import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

class Player extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      typing: false,
      fromServer: ''
    };
    this.setInput = this.setInput.bind(this);
    socket.on('output', fromServer => {
      this.setState({ fromServer: fromServer.output });
    });
  }

  componentDidUpdate() {
    socket.emit('input', { input: this.state.input });
  }

  setInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.setInput} />
        <p>TEST: {this.state.fromServer}</p>
      </div>
    )
  }

}

export default Player;
