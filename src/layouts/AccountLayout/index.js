/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Button, Form, Icon, Input,Checkbox} from "antd";
import {browserHistory as bsHistory} from "react-router";


const FormItem=Form.Item;

class Login extends React.Component {
    
   
    state={
        loading:false
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((error, value)=> {
            if(error) return;
            
            this.setState({loading:true});
            setTimeout(()=>{
                bsHistory.push("core/dashboard");
            },2000);
            
        });
        
    }
    
  
    render() {
        const {getFieldDecorator}=this.props.form;
        const requiredMsg=(msg)=>({rules: [{required: true, message: msg}]});
        
        return (
            <div>
                
               
               
                <Form onSubmit={(e)=>this.handleSubmit(e)} className="login-form">
                    <img className="bg" src={require("./assets/bg.jpg")}/>
                    <div className="beautiful-bar">
                        <div className="bg-danger"/>
                        <div className="bg-success"/>
                        <div className="bg-dignity"/>
                        <div className="bg-info"/>
                    </div>
                    <div className="title">
                        <img style={{marginTop:16}} height={20} src={require("./assets/admin-t.png")}/>
                    </div>
                    <div className="form-content">
                        <div className="form-label">User name</div>
                    <FormItem wrapperCol={{span: 24}}>
                       
                        {
                            getFieldDecorator("username", requiredMsg("请输入用户名"))(<Input  size='large' />)
                        } <Icon type="user"/>
                        
                    </FormItem>
                        <div className="form-label">Password</div>
                    <FormItem>
                        {
                            getFieldDecorator("password", requiredMsg("请输入密码"))(<Input type="password"/>)
                        }
                        <Icon type="lock"/>
                    </FormItem>
                        <div className="action-bar">
                            <Button loading={this.state.loading} className="login-btn " htmlType={"submit"} type={"primary"}>登录</Button>
    
                        </div>
                    </div>
                    
                   
                    
                    
                    
                
                </Form>
                
                
            </div>
        )
    }
}

const LoginForm=Form.create()(Login)

export default class Component extends React.Component {
    
    render() {
        
        return (
            <div className="login-layout">
                <LoginForm/>
            </div>
        )
    }
}