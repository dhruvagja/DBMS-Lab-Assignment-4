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


import { MikroORM } from '@mikro-orm/core';
import * as AdminJSMikroORM from '@adminjs/mikroorm'
import Owner from './owner.entity.js'

AdminJS.registerAdapter({
    Resource: AdminJSMikroORM.Resource,
    Database: AdminJSMikroORM.Database,
  });

//   const pool = new Pool({
//     user: "postgres",
//     password: "12345678",
//     host: "localhost",
//     port: 5432,
//     database: "postgres"
// });
const config = {
    entities: ["postgres"],
    dbName: '',
    type: 'postgresql',
    clientUrl: 'postgres://adminjs:adminjs@localhost:5435/adminjs',
}


const app = express()

const admin = new AdminJS({})

const adminRouter = AdminJSExpress.buildRouter(admin)

export default adminRouter;

