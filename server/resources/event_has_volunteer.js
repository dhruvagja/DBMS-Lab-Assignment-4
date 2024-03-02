import { DataTypes } from 'sequelize';

const buildehvResource = (sequelize) => {
  return {
    resource: sequelize.define('event_has_volunteer', {
      eid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'event',
            key: 'eid',
        },
      },
      roll: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
            model: 'volunteer',
            key: 'roll',
        },
      },
      
    }
    , {
        tableName : 'event_has_volunteer', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'event volunteers', // Change to the appropriate icon
      },
      properties: {
        eid: { isVisible: { list: true, filter: false, show: true, edit: true } },
        roll: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};



export default buildehvResource;
