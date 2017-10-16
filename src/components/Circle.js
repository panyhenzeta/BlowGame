import React, {Component} from 'react';

class Circle extends Component{

    constructor(props){
        super(props);
        this.state = {
            style:{ 
                top:62,          
                width:20,
                height:20,
                borderRadius:50,
                backgroundColor: '#df12ab',
                position:'absolute'
            }
        }
    }

    componentWillReceiveProps(){  
        let newStyle = Object.assign({}, this.state.style);
        newStyle.top += 10;
        this.setState({
            style:newStyle
        });       
    }

    blow(e){      
        e.target.style.visibility = 'hidden';
    }


    render(){
        return( <div ref="circle" style={this.state.style} onClick={this.blow.bind(this)}> </div>);       
    }

}

export default Circle;


