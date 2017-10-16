import React, { Component } from 'react';
import './styles/board.css';

import Board from './components/Board';
import PlayButton from './components/PlayButton';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isStarted:false
    };
  }

  start(){  
    this.setState({
      isStarted:true
    });
  }

  render() {
    return (
      <div> 
        <PlayButton start={this.start.bind(this)}/>
        <Board isStarted={this.state.isStarted}/>            
      </div>
    );
  }
}

export default App;
