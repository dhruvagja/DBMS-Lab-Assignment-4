import { DataTypes } from 'sequelize';

const buildcollegeResource = (sequelize) => {
  return {
    resource: sequelize.define('college', {
      name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      address: {
        type: DataTypes.STRING,
      },
      
      
    }
    , {
        tableName : 'college', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'colleges', // Change to the appropriate icon
      },
      properties: {
        name:   { isVisible: { list: true, filter: false, show: true, edit: true },
                    position: 1, 
                    sort: {
                        direction: 'asc', 
                        sortBy: 'name',  
                    },
                },
        address: { isVisible: { list: true, filter: false, show: true, edit: true } },
      
     },
  },
};

};

export default buildcollegeResource;
