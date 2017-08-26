import "./index.scss"
module.exports={
    path: "login",
    getComponents: (a, cb)=> {
        require.ensure([], (require)=> {
            cb(null, require("./index").default);
            
        })
    }
}