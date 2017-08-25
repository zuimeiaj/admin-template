

import CoreLayout from '../layouts/CoreLayout'
const routes =require("./routes");
module.exports={
    path:"core",
    component:CoreLayout,
    breadcrumbName:"控制台",
    childRoutes : [
        ...routes
    ]
}