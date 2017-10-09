import React, { Component } from 'react';
import './styles/board.css';

import Circle from './components/Circle';
import Board from './components/Board';
import PlayButton from './components/PlayButton';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      circles: []
    }
  }

  componentDidMount(){
    console.log("asd");
  }

  start(){    
    this.createCircles();
  }

  createCircles(){      
    let circle;

    setInterval(() => {    
      circle = <Circle />;
      this.setState({
          circles: [circle]
    });
    }, 1000);
    
  
  }

  render() {
    return (
      <div> 
        <PlayButton start={this.start.bind(this)}/>
        <Board/>  
        {this.state.circles}     
      </div>
    );
  }
}

export default App;
