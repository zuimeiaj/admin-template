/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Modal, message, notification, Button, Alert} from "antd";
export default class Component extends React.Component {
    
    state={visible:false}
    render() {
        
        return (
            <div>
                
                <Alert description="hello alert"/>
                <div style={{height:24}}/>
                <Modal
                    title={"模态框"}
                    onOk={()=>this.setState({visible:false})}
                        onCancel={()=>this.setState({visible:false})} visible={this.state.visible}>
                    <div >
                        <div>HTML ----</div>
                        <div>HTML ----</div>
                        <div>HTML ----</div>
                        <div>HTML ----</div>
                        <div>HTML ----</div>
                        <div>HTML ----</div>

                    </div>
                </Modal>
                <Button onClick={()=>message.success("clicked")}>message</Button>{" "}
                <Button onClick={()=>notification.info({message:"notice",description:"请关闭电脑"})}>notification</Button>{" "}
                <Button onClick={()=>Modal.info({content:"hello info"})}>dialog</Button>{" "}
                <Button onClick={()=>Modal.confirm({content:"hello confirm"})}>confirm</Button>{" "}
    
                <Button onClick={()=>this.setState({visible:true})}>modal</Button>{" "}
                

            </div>)
    }
}