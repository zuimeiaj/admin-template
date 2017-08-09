import React, {Component} from "react";
import {browserHistory, Router} from "react-router";

class AppContainer extends Component {
    
    shouldComponentUpdate() {
        return false
    }
    render() {
        const {routes}=this.props
        return ( <Router history={browserHistory} children={routes}/>)
    }
}

export default AppContainer
