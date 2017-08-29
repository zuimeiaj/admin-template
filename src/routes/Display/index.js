/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Card, Button, Tag, Tooltip, Popover, Steps, Tabs} from "antd";
export default class Component extends React.Component {
    
    render() {
        
        return (
            <div>
               
               <Card title="按钮">
                   <Button disabled>disabled</Button>   <Button >normal</Button>  <Button type="primary">primary</Button> <Button type="danger">danger</Button> <Button shape={'circle'} icon={'star-o'}/>
               </Card>
                <div style={{height:24}}/>
                <Card title="标签">
                    <Tag color="pink">pink</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="black">black</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="purple">purple</Tag>
                </Card>
                <div style={{height:24}}/>
                <Card title="提示 & 选项卡">
                    <Tooltip title="hello !">hover me</Tooltip>
                    
                    <div/>
                    <div style={{height:24}}/>
                    <Popover title="hello" content={<div>自定义文本</div>}>
                        hover me
                    </Popover>
                    <div style={{height:24}}/>
                    <Steps>
                        <Steps.Step title="第一步" key="1"/>
                        <Steps.Step title="第er步" key="2"/>
                        <Steps.Step title="第san步" key="3"/>
                        <Steps.Step title="第si步" key="4"/>

                    </Steps>
                    <div style={{height:24}}/>
                    <Tabs>
                        <Tabs.TabPane tab="tab1" key="1">content1</Tabs.TabPane>
                        <Tabs.TabPane tab="tab2" key="2">content2</Tabs.TabPane>
                        <Tabs.TabPane tab="tab3" key="3">content3</Tabs.TabPane>
                        <Tabs.TabPane tab="tab4" key="4">content4</Tabs.TabPane>
                    </Tabs>
                </Card>




            </div>)
    }
}