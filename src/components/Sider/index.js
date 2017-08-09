/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Layout,Menu,Icon} from "antd";
const Sider=Layout.Sider;
const MenuItem=Menu.Item;
const SubMenu=Menu.SubMenu;
export default class Component extends React.Component {
    state={
        collapsed: false,
    };
    onCollapse(collapsed) {
        
        this.setState({collapsed});
    }
    
    render() {
        return (
            <Sider  collapsed={this.state.collapsed}
                    onCollapse={(e)=>this.onCollapse(e)}
                    collapsible width={220}
                    style={{backgroundColor: "#404040"}}>
                <Menu theme="dark" mode={'inline'}>
                    <MenuItem key="1"><Icon type="desktop"/><span>Home</span></MenuItem>
                    <MenuItem key="2"><Icon type="pie-chart"/><span>Counter</span></MenuItem>
                    <SubMenu key="3" title={<span><Icon type="arrow-down"/><span>sub menu</span></span>}>
                        <MenuItem key="4"> menu item </MenuItem>
                    </SubMenu>
                </Menu>
            </Sider>)
    }
}