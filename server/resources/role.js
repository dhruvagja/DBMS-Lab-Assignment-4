import { DataTypes } from 'sequelize';

const buildroleResource = (sequelize) => {
  return {
    resource: sequelize.define('role', {
      rid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      rname: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      
    }
    , {
        tableName : 'role', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'role', // Change to the appropriate icon
      },
      properties: {
        rid: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};


export default buildroleResource;