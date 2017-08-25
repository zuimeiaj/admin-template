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
             
              
               
                {ActionBar}
            </div>

         
       )
   }
   
   renderContent(){
       return (
           <Table  columns={[
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
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"513825199609081212"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"234"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"5138251234239960908121217"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"234"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"513823242342519960908121217"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"1231"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"324"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"32423"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"23423"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"51382519960321321908121217"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"5138251912314cv960908121217"
               },{
                   name:"李小明",age:"36",sex:"男","height":"176","weight":"148","mobile":"18684034307",address:"四川省成都市武侯区",id:"fs"
               }
           ]} rowkey={'id'}>
           
           </Table>
       )
   }
}