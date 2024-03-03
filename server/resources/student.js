import { DataTypes } from 'sequelize';

const buildstudentResource = (sequelize) => {
  return {
    resource: sequelize.define('student', {
      roll: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      dept: {
        type: DataTypes.STRING,
      },
      
    }
    , {
        tableName : 'student', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'students', // Change to the appropriate icon
      },
      properties: {
        roll: { isVisible: { list: true, filter: true, show: true, edit: true },
                position: 1,
                sort: {
                    direction: 'asc', 
                    sortBy: 'roll',  
                },},
        name: { isVisible: { list: true, filter: true, show: true, edit: true },
                position: 2, },
        dept: { isVisible: { list: true, filter: true, show: true, edit: true },
                position: 3, },

      },
    },
  };
};



export default buildstudentResource;
