import { DataTypes } from 'sequelize';

const buildvolunteerResource = (sequelize) => {
  return {
    resource: sequelize.define('volunteer', {
      roll: {
        type: DataTypes.STRING,
        primaryKey: true,
        foreignKey: true,
        references: {
            model: 'student',
            key: 'roll',
        },
      },
      
      
    }
    , {
        tableName : 'volunteer', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'volunteers', // Change to the appropriate icon
      },
      properties: {
        roll: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};



export default buildvolunteerResource;
