import React, { Component } from 'react';

import {CIRCLE_SIZE, CIRCLE_TOP} from '../constants/circleConst';
class Circle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                top: CIRCLE_TOP,
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE             
            }
        }
    }

    componentWillReceiveProps() {     
        let newStyle = Object.assign({}, this.state.style);
        newStyle.top += 20;
        this.setState({
            style: newStyle
        });
    }

    blow(e) {
        e.target.style.visibility = 'hidden';
    }


    render() {
        return (<div ref="circle" 
                     style={this.state.style}
                     className="circle"
                     onClick={this.blow.bind(this)}> </div>);
    }

}

export default Circle;


