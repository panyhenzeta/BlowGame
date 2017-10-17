import React, {Component} from 'react';

import {BUTTON_WIDTH, BUTTON_HEIGHT, MARGIN} from '../constants/buttonConst'
 
class PlayButton extends Component{  

    constructor(props){
        super(props);
        this.state = {
            style:{
                width: BUTTON_WIDTH,
                height: BUTTON_HEIGHT,
                lineHeight: BUTTON_HEIGHT + 'px',
                margin: MARGIN + 'px auto ' +  MARGIN + 'px auto'
               
            }
        };
    }

    play(){
     this.props.start();
    }


    render(){
        return(
            <div style={this.state.style}
                 className="playBtn"
                 onClick={this.play.bind(this)}> Play </div>
        );
    }
}

export default PlayButton;