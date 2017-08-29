

import createG2 from "g2-react";
import G2 from "g2"
export const AreaChart=  createG2(chart => {
    
    chart.col('date', {
        range: [0, 1],
        type:'cat',
        alias:"时间"
    });
 
    chart.col("value",{
        alias:"任务数"
    })
    chart.area().position('date*value').shape('smooth');
    chart.render();
});

export const LineChart=createG2(chart=>{
    chart.col('date', {
        range: [0, 1],
        type:'cat',
        alias:"时间"
    });
    
    chart.col("value",{
        alias:"类型"
    });
    chart.legend({
        position:"top",
        dy:-20
    })
  
    chart.line().position('date*value').color("类型").size(2).shape('smooth');
    chart.point().position("date*value").color("类型").size(4)
    chart.render();
})

export const PieChart=createG2(chart=>{
    chart.coord('theta', {
        radius: 0.8 // 设置饼图的大小
    });
    
    chart.legend({
        position:"top",
        dy:-20
    })
    
    chart.intervalStack().position(G2.Stat.summary.percent("value")).color('name').label("name*..percent",(name,percent)=>{
        return name+`(${(percent*100).toFixed(2)}%)`
    })
    chart.render();
})

export const StackChart=createG2(chart=>{
    chart.col('date', {
        type:'cat',
        alias:"时间"
    });
    
    chart.col("value",{
        alias:"每天执行次数趋势"
    });
    chart.interval().position('date*value').size(25)
    chart.render();
})



