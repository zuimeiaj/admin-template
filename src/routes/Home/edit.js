/**
 *  created by yaojun on 2017/5/20
 *
 */

import React from "react";
import {Form, Input, Select, Radio, DatePicker, Button} from "antd";

const FormItem=Form.Item;

class EditForm extends React.Component {
    render() {
        let {getFieldDecorator, getFieldValue}=this.props.form;
        let layout={
            labelCol: {span: 4},
            wrapperCol: {span: 8}
        }
        const required = (msg)=>({rules:[{required:true,message:msg}]})
        return (
            <div>
                <Form>
                    <FormItem {...layout} label={"用户名"}>
                        {
                            getFieldDecorator("account",required())(<Input/>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"性别"}>
                        {
                            getFieldDecorator("sex",required())(
                                <Select>
                                    <Select.Option value="1">男</Select.Option>
                                    <Select.Option value="2">女</Select.Option>
                                </Select>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"手机号"}>
                        {
                            getFieldDecorator("mobile",required())(<Input type="number"/>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"地址"}>
                        {
                            getFieldDecorator("address")(<Input type="textarea" rows="2"/>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"婚否"}>
                        {
                            getFieldDecorator("marry")(
                                <Radio.Group >
                                    <Radio value="1">是</Radio>
                                    <Radio value="2">否</Radio>
                                </Radio.Group>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"出生日期"}>
                        {
                            getFieldDecorator("date",required())(<DatePicker/>)
                        }
                    </FormItem>
                    <FormItem {...layout} label={"工作日期"}>
                        {
                            getFieldDecorator("range")(<DatePicker.RangePicker/>)
                        }
                    </FormItem>
                    <FormItem wrapperCol={{span:8,offset:4}} >
                        <Button type={'primary'} htmlType={'submit'}>提交</Button>
                    </FormItem>

                </Form>
            </div>
        )
    }
}

export default Form.create()(EditForm);
