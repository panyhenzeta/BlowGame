import React, {Component} from 'react';

class Circle extends Component{

    circleStyle(size, position, color){
        console.log(position);
        let dim = size + 'px';
        let style = {
            width: dim,
            height: dim,
            backgroundColor: color,
            top: position.top + 'px',
            left: position.left + 'px',
            position: 'absolute',
            borderRadius:50,
        }
        return style;
    }

    blowCircle(e){       
        e.target.style.visibility = 'hidden';
    }
   
    render(){
        return(
             <div style={this.circleStyle} onClick={this.blowCircle.bind(this)}></div>
        );       
    }

}

export default Circle;


