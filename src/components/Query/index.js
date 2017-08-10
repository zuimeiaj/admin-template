/**
 *  created by yaojun on 2017/8/10
 *
 */

import React from "react";
import {Form,Button} from "antd";
const FormItem =Form.Item
import "./index.scss"
export default class Query extends React.Component {
    
    handleSubmit(e){
        e.preventDefault();
        this.queryForm.validateFields((error,value)=>{
            if(error) return ;
            this.onSubmit(value);
        })
    }
    onSubmit(value){
        console.log(value)
    }
    componentWillMount() {
        const QueryForm=(props)=>{
            this.queryForm=props.form;
            return (
                <Form  onSubmit={(e)=>this.handleSubmit(e)} layout={'inline'} className="common-query-form">
                    {this.renderQueryForm(props.form,
                        (
                            <FormItem>
                                <Button  type={"primary"} htmlType={"submit"} >查询</Button>
                                <Button onClick={()=>props.form.resetFields()} style={{marginLeft:12}} type={'danger'} >重置</Button>
                            </FormItem>)
                    )}
        
                </Form>)
            }
        
        
        this.QueryForm=Form.create()(QueryForm);
        
    }
    
    renderQueryForm() {
        return null;
    }
    renderContent(){
        return null;
    }
    
    render() {
        const QueryForm=this.QueryForm;
        return (
            <div>
                <QueryForm/>
                {this.renderContent()}
            </div>
        )
    }
}