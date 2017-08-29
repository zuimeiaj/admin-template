import React from 'react'
import {Layout,Icon,Badge,Popover} from "antd";
import {Link,browserHistory as history} from "react-router";
const HeaderComponent =Layout.Header;
import './Header.scss'

class Header extends React.Component{
    exit(){
        history.replace("/login");
    }
    render(){
        return  (
            <HeaderComponent className="layout-header">
                <Badge className="notification" count={6} >
            
                    <Icon  type="mail"/>
                </Badge>
                <Popover replacement="bottom"
                         content={
                             <div className="avatar-setting-panel">
                                 <div className="item">
                                     <Link to="personal"><Icon type="user"/>个人中心</Link>
                                 </div>
                                 <div className="item">
                                     <a onClick={()=>this.exit()}><Icon type="logout"/>退出</a>
                                 </div>
                             </div>
                         }>
                    <img className="layout-header-avatar" height={52} src={require("./assets/cat.jpg" )}/>
                </Popover>
            </HeaderComponent>
        )
    }
}


export default Header
