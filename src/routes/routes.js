




module.exports=[
    {
        path:"counter",
        breadcrumbName:"计数器",
        getComponents:(a,cb)=>{
            require.ensure([],(require)=>{
               cb (null,require("./Counter").default);
    
            })
        }
    },{
        path:"home",
        breadcrumbName:"首页",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb (null,require("./Home").default);
            })
        }
    }
]