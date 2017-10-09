import React, {Component} from 'react';

class PlayButton extends Component{  
    play(){
     this.props.start();
    }


    render(){
        return(
            <div className="playBtn" onClick={this.play.bind(this)}> Play </div>
        );
    }
}

export default PlayButton;