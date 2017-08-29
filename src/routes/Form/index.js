/**
 *  created by yaojun on 2017/8/4
 *
 */

import React from "react";
import {
    Input, Form, Checkbox, Radio, Select, Cascader, DatePicker, Slider, Switch, Upload, Tree, Icon,
    Button
} from "antd";

const FormItem =Form.Item;
const CheckboxGroup=Checkbox.Group;
const RadioGroup=Radio.Group;
const TreeNode=Tree.TreeNode;
export default class Component extends React.Component {
    
    render() {
        const layout ={
            wrapperCol:{span:10},
            labelCol:{span:4}
        }
        return (
            <div>
    
                <FormItem {...layout} label="输入框">
                    <Input/>
                </FormItem>
                <FormItem {...layout} label="多选">
                    <CheckboxGroup options={[
                        {label:"打球",value:1},
                        {label:"游泳",value:2},
                        {label:"打牌",value:3},
                        {label:"唱歌",value:4},
                        {label:"跳舞",value:5},

                    ]}>
                    
                    </CheckboxGroup>
                </FormItem>
                <FormItem {...layout} label="单选">
                    <RadioGroup>
                        <Radio value="1">差</Radio>
                        <Radio value="2">一般</Radio>
                        <Radio value="3">良</Radio>
                        <Radio value="4">好</Radio>

                    </RadioGroup>
                </FormItem>
                <FormItem {...layout} label="下拉选择">
                    <Select style={{width:100}}>
                        <Select.Option value="1">喜欢</Select.Option>
                        <Select.Option value="2">喜欢1</Select.Option>
                        <Select.Option value="3">喜欢2</Select.Option>
                        <Select.Option value="4">喜欢3</Select.Option>
                        <Select.Option value="5">喜欢4</Select.Option>
                        <Select.Option value="6">喜欢5</Select.Option>

                    </Select>
                </FormItem>
                <FormItem {...layout} label="级联">
                  <Cascader options={[
                      {
                          label:"一级",
                          value:'0-1',
                          children:[
                              {
                                  label:"二级",
                                  value:"0-1-0",
                                  children:[
                                      {
                                          label:"三级",
                                          value:"0-1-0-0"
                                      }
                                  ]
                              }
                          ]
                      },{
                          label:"一级02",
                          value:'0-2',
                          children:[
                              {
                                  label:"二级",
                                  value:"0-2-0",
                                  children:[
                                      {
                                          label:"三级",
                                          value:"0-2-0-0"
                                      }
                                  ]
                              }
                          ]
                      },
                  ]}/>
                </FormItem>
                <FormItem {...layout} label="日期">
                   <DatePicker/>
                </FormItem>
                <FormItem {...layout} label="日期范围">
                    <DatePicker.RangePicker/>
                </FormItem>
                <FormItem {...layout} label="滑块">
                    <Slider defaultValue="30"/>
                </FormItem>
                <FormItem {...layout} label="开关">
                    <Switch checkedChildren="ON" unCheckedChildren="OFF"/>
                </FormItem>
                <FormItem {...layout} label="上传">
                    <Upload>
                        <Button>
                        <Icon type="upload"/> 浏览文件
                        </Button>
                    </Upload>
                </FormItem>
                <FormItem {...layout} label="树">
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0']}
                       
                    >
                        <TreeNode title="parent 1" key="0-0">
                            <TreeNode title="parent 1-0" key="0-0-0">
                                <TreeNode title="leaf" key="0-0-0-0" />
                                <TreeNode title="leaf" key="0-0-0-1" />
                                <TreeNode title="leaf" key="0-0-0-2" />
                            </TreeNode>
                            <TreeNode title="parent 1-1" key="0-0-1">
                                <TreeNode title="leaf" key="0-0-1-0" />
                            </TreeNode>
                            <TreeNode title="parent 1-2" key="0-0-2">
                                <TreeNode title="leaf" key="0-0-2-0" />
                                <TreeNode title="leaf" key="0-0-2-1" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </FormItem>



            </div>)
    }
}