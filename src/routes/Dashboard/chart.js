

import createG2 from "g2-react";
export default  createG2(chart => {
    
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