import { DataTypes } from 'sequelize';

const buildlogisticsResource = (sequelize) => {
  return {
    resource: sequelize.define('logistics', {
      pid: {
        type: DataTypes.STRING,
        primaryKey: true,
        foreignKey: true,
        references: {
            model: 'participant',
            key: 'pid',
        },
      },
      hall: {
        type: DataTypes.STRING,
      },
      roomno: {
        type: DataTypes.STRING,
      },
      
    }
    , {
        tableName : 'logistics', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'logistics', // Change to the appropriate icon
      },
      properties: {
        name: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};


export default buildlogisticsResource;