import React, {Component} from 'react';

import {BOARD_WIDTH, BOARD_HEIGHT, BORDER_SIZE} from '../constants/boardConst';
import Circle from './Circle';

class Board extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      circles: [],
      style: {
        width: BOARD_WIDTH + '%',
        height: BOARD_HEIGHT + 'vw',
        border: BORDER_SIZE +'px solid black'
      }
    }
  }
  
  componentWillReceiveProps(nextProps){   
    if(nextProps.isStarted){
        this.createCircles();
    }
  }

  createCircles(){      
    let circle;

    setInterval(() => {    
      circle = <Circle />;
      this.setState({
          circles: [circle]
    });
    }, 100);
    
  
  }

    render(){
        return(
            <div style={this.state.style} className='board'> 
                 {this.state.circles}  
            </div>
        );
    }
}

export default Board;