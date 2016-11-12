import React from 'react';
import Navbar from './Navbar';

const App = ({ children }) => (
  <div>
    <Navbar>
      {children}
    </Navbar>
  </div>
);

export default App;
