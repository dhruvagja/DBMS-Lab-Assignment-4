import { DataTypes } from 'sequelize';

const buildsmanageResource = (sequelize) => {
  return {
    resource: sequelize.define('student_manage', {
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
      rid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'rid',
        },
      },
      
      
    }
    , {
        tableName : 'student_manage', // 'student' is the name of the table in the database
        timestamps: false,
    }),
    options: {
      navigation: {
        icon: 'student_manage', // Change to the appropriate icon
      },
      properties: {
        roll: { isVisible: { list: true, filter: false, show: true, edit: true } },
        eid: { isVisible: { list: true, filter: false, show: true, edit: true } },
        rid: { isVisible: { list: true, filter: false, show: true, edit: true } },
      },
    },
  };
};


export default buildsmanageResource;