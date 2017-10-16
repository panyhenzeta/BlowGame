import React, {Component} from 'react';

import Circle from './Circle';

class Board extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      circles: []
    }
  }
  
  componentWillReceiveProps(nextProps){   
    if(nextProps.isStarted){
      this.start();
    }
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

    render(){
        return(
            <div className='board'> 
                 {this.state.circles}  
            </div>
        );
    }
}

export default Board;