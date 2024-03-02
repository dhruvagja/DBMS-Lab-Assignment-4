import { DataTypes } from 'sequelize';

const buildehpResource = (sequelize) => {
  return {
    resource: sequelize.define('event_has_participant', {
      eid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'event',
            key: 'eid',
        },
      },
      pid: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'participant',
            key: 'pid',
        },
      },
      
    }
    , {
        tableName : 'event_has_participant', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'event participants', // Change to the appropriate icon
      },
      properties: {
        eid: { isVisible: { list: true, filter: false, show: true, edit: true } },
        pid: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};



export default buildehpResource;
