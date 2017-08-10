import React, {Component} from "react";
import {browserHistory as bsHistory, Router} from "react-router";

class AppContainer extends Component {
    
    componentWillMount(){
        this.handleResize=this.handleResize.bind(this);
        const route = bsHistory.getCurrentLocation();
        const path =route.pathname;
        if(path==="/"){
            bsHistory.push("/login");
        }
        
        window.addEventListener("resize",this.handleResize,false);
    }
    handleResize(){
       const minBodyHeight= window.innerHeight - 64;
       
       
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        const {routes}=this.props
        return ( <Router history={bsHistory} children={routes}/>)
    }
}

export default AppContainer


