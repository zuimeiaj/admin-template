/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Row, Col, Icon,Card} from "antd";
import ChartComponent from "./chart";
import "./index.scss";
export default class Component extends React.Component {
    render() {
        let chartData=new Array(10).fill(0)
        chartData=chartData.map((item,index)=>({date:new Date(2017,1,index+1).toLocaleDateString(),value:Math.floor(Math.random()*100+10)}))
        console.log(chartData)
        return (
            <div>
                <Row className="stat-text" gutter={12}>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-success">
                            <div>
                                <Icon type="reload"/>
                            </div>
                            <div className="count"> <span >897</span></div>
                            
                            <div className="center">当前任务数</div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-primary">
                            <div>
                                <Icon type="reload"/>
                            </div>
                            <div className="count"> <span >678</span></div>
    
                            <div className="center">已完成</div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-warning">
                            <div>
                                <Icon type="reload"/>
                            </div>
                            <div className="count"> <span >145</span></div>
    
                            <div className="center">失败</div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} className="stat-item ">
                        <div className="bg-info">
                            <div>
                                <Icon type="reload"/>
                            </div>
                            <div className="count"> <span >223</span></div>
    
                            <div className="center">重新执行</div>
                        </div>
                    </Col>
                </Row>
                <Card title={<div><Icon type="area-chart"/> 历史任务趋势</div>} className="stat-chart">
                    <ChartComponent forceFit={true} width={1000} height={350} data={chartData}/>
                </Card>
            </div>
        )
    }
}