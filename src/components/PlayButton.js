import React, {Component} from 'react';

class PlayButton extends Component{

    play(){
        alert("Let's play the game");
    }

    render(){
        return(
            <div className="playBtn" onClick={this.play}> Play </div>
        );
    }
}

export default PlayButton;