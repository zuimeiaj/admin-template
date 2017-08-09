// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
const routes =require("./routes");

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = () => ({
  path        : '/',
  component   : CoreLayout,
  childRoutes : [
    ...routes
  ]
})

export default createRoutes
