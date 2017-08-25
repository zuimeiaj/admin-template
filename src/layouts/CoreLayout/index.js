/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Layout,Menu,Icon,Breadcrumb} from "antd";
import {browserHistory as bsHistory} from "react-router";
import {Link} from "react-router"
import "./index.scss";
import Header from "../../components/Header";
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
        const routes =this.props.router.routes;
        console.log(routes)
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
                    <Layout style={{overflowY:"scroll"}}>
                       
                        <Header/>
                        <Breadcrumb className="layout-breadcrumb" routes={this.props.router.routes} itemRender={(route, params, routes, paths)=>{
                            if(route.path ==="/") return <Icon type="home"/>;
                            const last = routes.indexOf(route) === routes.length - 1;
                            return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
                        }}/>
                    
                        <Content style={{padding:12}}>{children}</Content>
                        <Footer>
                            © 2017  Admin Template  powered by antd
                        </Footer>
                    </Layout>
                   
                   
                </Layout>
            )
    }
}