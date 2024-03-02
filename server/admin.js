import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'


// import * as AdminJSMikroORM from '@adminjs/mikroorm'

// AdminJS.registerAdapter({
//     Resource: AdminJSMikroORM.Resource,
//     Database: AdminJSMikroORM.Database,
//   });


// const config = {
//     entities: [Owner],
//     dbName: 'adminjs',
//     type: 'postgresql',
//     clientUrl: 'postgres://adminjs:adminjs@localhost:5435/adminjs',
// }


const app = express()

const admin = new AdminJS({})

const adminRouter = AdminJSExpress.buildRouter(admin)




export default adminRouter;

