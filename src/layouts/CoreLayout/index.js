/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Layout,Menu,Icon} from "antd";
import {browserHistory as bsHistory} from "react-router";
import "./index.scss";
const Header =Layout.Header;
const Content =Layout.Content;
const Footer =Layout.Footer;
const Sider =Layout.Sider;
const MenuItem=Menu.Item;
const SubMenu=Menu.SubMenu;
export default class Component extends React.Component {
    state={
        collapsed: false,
        selectedKeys:[]
    };
    componentWillMount(){
       const route= bsHistory.getCurrentLocation();
       const path=route.pathname;
       this.state.selectedKeys=[path];
       
       
    }
    onCollapse(collapsed) {
        
        this.setState({collapsed});
    }
    handleMenuClick(e){
        this.props.router.push(e.key);
    }
    render() {
        const {children}=this.props;
        return (
                <Layout>
                        <Sider
                            collapsed={this.state.collapsed}
                            onCollapse={(e)=>this.onCollapse(e)}
                            collapsible width={220}
                            style={{backgroundColor:"#404040"}}>
                            <div className="logo">
    
                            </div>
                            <Menu defaultSelectedKeys={this.state.selectedKeys} onClick={(e)=>this.handleMenuClick(e)} theme="dark" mode={'inline'}>
                                <MenuItem key="/core/home"><Icon type="desktop"/><span>Home</span></MenuItem>
                                <MenuItem key="/core/counter"><Icon type="pie-chart"/><span>Counter</span></MenuItem>
                               
                            </Menu>
                        </Sider>
                    <Layout>
                        <Header/>
                        <Content style={{padding:24}}>{children}</Content>
                        <Footer/>
                    </Layout>
                   
                   
                </Layout>
            )
    }
}