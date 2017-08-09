/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Button,Icon} from "antd";
import EventComponent from "../../components/EventComponent/index";
import {NormalCounter, DoubleCounter,SuperCounter} from "./SuperCounter";

export default class Component extends EventComponent {
    
    state={
        counter:0
    }
    render() {
        
        return (
            <div style={{height: 1600}}>
                <DoubleCounter/>
                <NormalCounter/>
                <Button onClick={()=>this.emit(SuperCounter.INCREMENT)}>Increment</Button>
                <Button onClick={()=>this.emit(SuperCounter.DECREMENT)}>Decrement</Button>
            </div>)
    }
}