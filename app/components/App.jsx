import React from 'react';
import Navbar from './Navbar';
import Player from './Player';

const App = () => (
  <div className="mdl-layout mdl-js-layout">
    <Navbar>
      <h1>YO EXAMPLE</h1>
      <Player />
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
      >
        <i className="material-icons">add</i>
      </button>
    </Navbar>
  </div>
)

export default App;
