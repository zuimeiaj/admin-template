/**
 *  created by yaojun on 2017/8/9
 *
 */

import React from "react";
const Event =require("eventbusjs");
export default class EventComponent extends React.Component {
    on(name,cb){
        Event.addEventListener(name,cb);
    }
    emit(name,params){
        Event.dispatch(name,this,params);
    }
    off(name,cb){
        Event.removeEventListener(name,cb);
    }
}