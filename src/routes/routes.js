




module.exports=[
    {
        path:"counter",
        getComponents:(a,cb)=>{
            require.ensure([],(require)=>{
               cb (null,require("./Counter").default);
    
            })
        }
    },{
        path:"home",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb (null,require("./Home").default);
            })
        }
    }
]