import React from 'react';
import Board from './components/Board'

import './App.css';

function App() {
  return (
      <div className="App">
        <div className="Main">
          <h1 className='margin'>Matchie Samesie</h1>
          <Board />
        </div>
      </div>
  );
}

export default App;
