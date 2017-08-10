/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import Query from "../../components/Query/index";
import {Form,Input,Table,Select} from "antd";
const FormItem =Form.Item;

export default class Component extends Query {
   renderQueryForm({getFieldDecorator},ActionBar){
       
       return (
            <div>
               <FormItem label={'名称'}>
                   {
                       getFieldDecorator("name")(<Input/>)
                   }
               </FormItem>
               <FormItem label={'身高'}>
                   {
                       getFieldDecorator("height")(<Input/>)
                   }
               </FormItem>
               <FormItem label={'体重'}>
                   {
                       getFieldDecorator("weight")(<Input/>)
                   }
               </FormItem>
               <FormItem label={'性别'}>
                   {
                       getFieldDecorator("sex")(
                           <Select>
                               <Select.Option value="1">男</Select.Option>
                               <Select.Option value="2">女</Select.Option>

                           </Select>
                       )
                   }
               </FormItem>
               <FormItem label={'电话'}>
                   {
                       getFieldDecorator("mobile")(<Input/>)
                   }
               </FormItem>
               <FormItem label={'地址'}>
                   {
                       getFieldDecorator("address")(<Input/>)
                   }
               </FormItem>
               
                {ActionBar}
            </div>

         
       )
   }
   
   renderContent(){
       return (
           <Table bordered columns={[
               {
                   title:"姓名",
                   dataIndex:"name"
               },{
                   title:"年龄",
                   dataIndex:"age"
               },{
                   title:"身高",
                   dataIndex:"height"
               },{
                   title:"体重",
                   dataIndex:"weight"
               },{
                   title:"性别",
                   dataIndex:"sex"
               },{
                   title:"电话",
                   dataIndex:"mobile"
               },{
                   title:"地址",
                   dataIndex:"address"
               },{
                   title:"身份证",
                   dataIndex:"id"
               }
           ]} dataSource={[
               {
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"51382519960908121216"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"51382519960908121217"
               },
           ]} rowkey={'id'}>
           
           </Table>
       )
   }
}