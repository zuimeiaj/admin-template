

import CoreLayout from '../layouts/CoreLayout'
const routes =require("./routes");
module.exports={
    path:"core",
    component:CoreLayout,
    childRoutes : [
        ...routes
    ]
}