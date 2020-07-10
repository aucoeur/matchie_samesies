import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import gameReducer from './reducers';
import Board from './components/Board'

import './App.css';

const store = createStore(gameReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Main">
          <h1 className='margin'>Matchie Samesie</h1>
          <Board />
        </div>
      </div>
    </Provider>
  );
}

export default App;
