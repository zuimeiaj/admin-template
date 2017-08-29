/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Row, Col, Icon,Card,Progress} from "antd";
import {AreaChart,LineChart,StackChart,PieChart} from "./chart";
import G2 from "g2";
import "./index.scss";
export default class Component extends React.Component {
    render() {
        let chartData=new Array(10).fill(0)
        chartData=chartData.map((item,index)=>({
            success:Math.floor(Math.random()*20+10),
            fail:Math.floor(Math.random()*15+5),
            date:new Date(2017,1,index+1).toLocaleDateString(),value:Math.floor(Math.random()*100+10)}))
       
        let lineData =[];
        for(let i =0;i<7;i++){
            let date =new Date(2017,1,i+1).toLocaleDateString()
            lineData.push({"类型":"成功",value:Math.floor(Math.random()*10+5),date});
            lineData.push({"类型":"失败",value:Math.floor(Math.random()*5+5),date});
            lineData.push({"类型":"异常",value:Math.floor(Math.random()*8+2),date});
    
        }
        return (
            <div>
                <Row className="stat-text" gutter={12}>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-success">
                            <div className="left-icon">
                                <Icon type="code-o"/>
                            </div>
                            <div className="right-count">
                                <p className="title">上周执行</p>
                                <p className="count"> 299</p>
                                <p className="percent">同比 <Icon type="arrow-up"/>  12%</p>
                                
                            </div>
                        </div>
                        
                      
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-success">
                            <div className="left-icon">
                                <Icon type="check"/>
                            </div>
                            <div className="right-count">
                                <p className="title">上周已完成</p>
                                <p className="count"> 123</p>
                                <p className="percent">同比 <Icon type="arrow-down"/>  9%</p>
        
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-success">
                            <div className="left-icon">
                                <Icon type="exclamation" />
                            </div>
                            <div className="right-count">
                                <p className="title">已失败</p>
                                <p className="count"> 22</p>
                                <p className="percent">同比 <Icon type="arrow-up"/>  1.2%</p>
        
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-success">
                            <div className="left-icon">
                                <Icon type="question" />
                            </div>
                            <div className="right-count">
                                <p className="title">异常</p>
                                <p className="count"> 10</p>
                                <p className="percent">同比 <Icon type="arrow-down"/>  0.29%</p>
        
                            </div>
                        </div>
                    </Col>
                </Row>
                <Card title={<div><Icon type="area-chart"/> 历史任务趋势</div>} className="stat-chart">
                    <AreaChart forceFit={true} width={1000} height={350} data={chartData}/>
                </Card>
                <div style={{height:24}}/>
                <Card title={<div><Icon type="line-chart"/> 失败与成功次数</div>}>
                    <LineChart forceFit={true} width={1000} height={350} data={lineData}/>
                </Card>
                
                <div style={{height:24}}/>
                <Row gutter={24}>
                    <Col md={14} lg={14} sm={24}>
                        <Card title={<div><Icon type="bar-chart"/> 每日执行趋势</div>}>
                            <StackChart forceFit={true} width={1000} height={300} data={chartData}/>
                        </Card>
                    </Col>
                    <Col md={10} lg={10} sm={24}>
                        <Card title={<div><Icon type="pie-chart"/> 每日执行趋势</div>}>
                            <PieChart forceFit={true} width={1000} height={300} data={[
                                {
                                    name:"Success",
                                    value:34
                                },{
                                    name:"Fail",
                                    value:12
                                },{
                                    name:"Exception",
                                    value:10
                                },
                            ]}/>
                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}