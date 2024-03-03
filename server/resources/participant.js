import { DataTypes } from 'sequelize';

const buildparticipantResource = (sequelize) => {
  return {
    resource: sequelize.define('participant', {
      pid: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      collegename: {
        type: DataTypes.STRING,
        foreignKey: true,
        references: {
            model: 'college',
            key: 'name',
        },
      },
      
    }
    , {
        tableName : 'participant', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'participants', // Change to the appropriate icon
      },
      properties: {
        pid: { isVisible: { list: true, filter: false, show: true, edit: true },
                position: 1,
                sort :false,
                primaryKey: true,
            },
        name: { isVisible: { list: true, filter: false, show: true, edit: true },
                position: 2,
                sort :false,
            },
        collegename: { isVisible: { list: true, filter: false, show: true, edit: true },
                position: 3,
                sort :false,
            },
      },
    },
  };
};


export default buildparticipantResource;