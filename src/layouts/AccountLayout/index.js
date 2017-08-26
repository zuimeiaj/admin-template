/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {Form,Input,Icon,Button} from "antd";
import {browserHistory as bsHistory} from "react-router"
const FormItem = Form.Item;
class Login extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((error,value)=>{
            if(error) return ;
            
            bsHistory.push("core/dashboard");
        });
        
    }
    render(){
        const {getFieldDecorator} =this.props.form;
        const requiredMsg=(msg)=>({rules:[{required:true,message:msg}]});
        
        return (
            <Form onSubmit={(e)=>this.handleSubmit(e)} className="login-form">
                <div className="title">
                    登录
                </div>
                <FormItem wrapperCol={{span:24}}>
                    {
                        getFieldDecorator("username",requiredMsg("请输入用户名"))(<Input size='large' addonBefore={<Icon type="user"/>}/>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator("password",requiredMsg("请输入密码"))(<Input addonBefore={<Icon type="lock"/>} type="password"/>)
                    }
                </FormItem>
                
                <FormItem>
                    <Button className="login-btn" htmlType={"submit"}  type={"primary"}>登录</Button>
                </FormItem>

            </Form>
        )
    }
}
const LoginForm = Form.create()(Login)

export default class Component extends React.Component {
    
    render() {
      
        return (
            <div className="login-layout">
                <LoginForm/>
            </div>
        )
    }
}