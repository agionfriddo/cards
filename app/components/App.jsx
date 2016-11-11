import React from 'react';
import Navbar from './Navbar';
import Player from './Player';
import Opponent from './Opponent';
import Question from './Question'
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');


const App = () => (
  <div>
      <Navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Question socket={socket}/>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <Player socket={socket}/>
          </div>
          <div className="col-md-6">
            <Opponent socket={socket}/>
          </div>
        </div>
      </div>
      </Navbar>
  </div>
)

export default App;
