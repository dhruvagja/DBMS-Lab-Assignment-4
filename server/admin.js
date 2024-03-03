
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import { Sequelize } from 'sequelize';
import SequelizeAdapter from '@adminjs/sequelize';
import buildUserResource from './resources/users.js'; // assuming you have a users resource
import buildstudentResource from './resources/student.js';
import buildcollegeResource from './resources/college.js';
import buildeventResource from './resources/event.js';
import buildehpResource from './resources/event_has_participant.js';
import buildehvResource from './resources/event_has_volunteer.js';
import buildparticipantResource from './resources/participant.js';
import buildroleResource from './resources/role.js';
import buildsmanageResource from './resources/student_manage.js';
import buildsparticipateResource from './resources/student_participates.js';
import buildvolunteerResource from './resources/volunteer.js';
import buildlogisticsResource from './resources/logistics.js';

const app = express();

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'postgres',
  username: 'postgres',
  password: '2003',
  host: 'localhost',
  port: 5432,
});

AdminJS.registerAdapter(SequelizeAdapter, 'sequelize', { sequelize });

const admin = new AdminJS({
  databases: [sequelize],
  resources: [buildUserResource(sequelize),
              buildstudentResource(sequelize),
              buildcollegeResource(sequelize),
              buildeventResource(sequelize),
              buildehpResource(sequelize),
              buildehvResource(sequelize),
              buildparticipantResource(sequelize),
              buildroleResource(sequelize),
              buildsmanageResource(sequelize),
              buildsparticipateResource(sequelize),
              buildvolunteerResource(sequelize),
              buildlogisticsResource(sequelize),
              
            ], // add more resources as needed
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(admin);

export default router;