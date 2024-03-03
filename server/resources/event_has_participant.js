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
        tableName : 'event_has_participant', 
        freezeTableName: true,
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'event participants', // Change to the appropriate icon
      },
      properties: {
        eid: { isVisible: { list: true, filter: false, show: true, edit: true }
                ,position: 1,
                sort :false,},
        pid: { isVisible: { list: true, filter: false, show: true, edit: true }
                ,position: 2,
                sort :false,},
      },
    },
  };
};



export default buildehpResource;
