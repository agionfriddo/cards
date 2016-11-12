import React from 'react';
import Navbar from './Navbar';
import Player from './Player';
import Opponent from './Opponent';
import Question from './Question'


const Game = () => (
  <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Question />
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <Player />
          </div>
          <div className="col-md-6">
            <Opponent />
          </div>
        </div>
      </div>
  </div>
)

export default Game;
