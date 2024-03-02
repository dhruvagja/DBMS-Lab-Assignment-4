// resources/users.js
import { DataTypes } from 'sequelize';

const buildUserResource = (sequelize) => {
  return {
    resource: sequelize.define('users', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,

      },
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
      
    }
    , {
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'users', // Change to the appropriate icon
      },
      properties: {
        id: { isVisible: { list: true, filter: false, show: true, edit: true } },
        password: { isVisible: { list: true, filter: false, show: true, edit: true } }, // Hide password on list and filter views
        //list: ['id', 'password', 'role'],
      },
    },
  };
};

export default buildUserResource;
