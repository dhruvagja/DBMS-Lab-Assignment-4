import { DataTypes } from 'sequelize';

const buildeventResource = (sequelize) => {
  return {
    resource: sequelize.define('event', {
      eid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ename: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      type: {
        type: DataTypes.STRING,
      },
      description :{
        type: DataTypes.STRING,
      }
      
    }
    , {
        tableName : 'event', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'events', // Change to the appropriate icon
      },
      properties: {
        eid: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};



export default buildeventResource;
