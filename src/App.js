import React, { Component } from 'react';
import './styles/board.css';

import Circle from './components/Circle';
import Board from './components/Board';
import PlayButton from './components/PlayButton';

class App extends Component {
  render() {
    return (
      <div> 
        <PlayButton/>
        <Board/>
        <Circle/>
      </div>
    );
  }
}

export default App;
