import { DataTypes } from 'sequelize';

const buildparticipantResource = (sequelize) => {
  return {
    resource: sequelize.define('participant', {
      name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      pid: {
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
        name: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};


export default buildparticipantResource;