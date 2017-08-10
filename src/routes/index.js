// We only need to import the modules necessary for initial render
const  login =require ("../layouts/AccountLayout/RouteLayout");
const core =require("./RouteLayout");


/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = () => ({
  path        : '/',
  childRoutes : [
    core,login
  ]
})

export default createRoutes
