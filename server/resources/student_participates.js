import { DataTypes } from 'sequelize';

const buildsparticipateResource = (sequelize) => {
  return {
    resource: sequelize.define('student_participates', {
      roll: {
        type: DataTypes.STRING,
        primaryKey: true,
        oreignKey: true,
        references: {
            model: 'student',
            key: 'roll',
        },
      },
      eid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
            model: 'event',
            key: 'eid',
        },
      },
      
      
      
    }
    , {
        tableName : 'student_participates', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'student_participates', // Change to the appropriate icon
      },
      properties: {
        roll: { isVisible: { list: true, filter: false, show: true, edit: true } },
        eid: { isVisible: { list: true, filter: false, show: true, edit: true } },
        
      },
    },
  };
};


export default buildsparticipateResource;