import React, {Component} from 'react';

class Circle extends Component{

    constructor(props){
        super(props);
        this.state = {
            style:{
                top:0,
                left:0,
                width:20,
                height:20,
                borderRadius:50,
                backgroundColor: '#df12ab',
                position:'relative'
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
        return( <div style={this.state.style} onClick={this.blow.bind(this)}> </div>);       
    }

}

export default Circle;


