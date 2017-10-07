import React, {Component} from 'react';

class Circle extends Component{
    style={
        border: 5,
        borderRadius:50,
        backgroundColor: '#ac12fe',
        width:30,
        height:30
    }

    blowCircle(e){       
        e.target.style.visibility = 'hidden';
    }
   
    render(){
        return(
             <div style={this.style} onClick={this.blowCircle.bind(this)}></div>
        );       
    }

}

export default Circle;


