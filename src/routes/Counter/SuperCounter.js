/**
 *  created by yaojun on 2017/8/9
 *
 */

import React from "react";
import EventComponent from "../../components/EventComponent/index";

export  class SuperCounter extends EventComponent {
    
    state={
        counter:1
    }
    static INCREMENT="counter:increment";
    static DECREMENT="counter:decrement";
    componentWillMount(){
        this.on(SuperCounter.INCREMENT,this.onIncrement.bind(this));
        this.on(SuperCounter.DECREMENT,this.onDecrement.bind(this));
    }
    onIncrement(){
    
    }
    onDecrement(){
    
    }
    render(){
        return (<div>{this.type}:{this.state.counter}</div>)
    }
    
}


export class DoubleCounter extends  SuperCounter{
    type="double";
    onIncrement(){
        
        this.setState({counter:this.state.counter<<1})
    }
    onDecrement(){
        this.setState({counter:this.state.counter>>1})
    }
}

export class NormalCounter extends SuperCounter{
    type="normal";
    onIncrement(){
        this.setState({counter:this.state.counter+1})
    }
    onDecrement(){
        this.setState({counter:this.state.counter-1});
    }
}