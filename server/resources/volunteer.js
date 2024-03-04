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
        roll: { isVisible: { list: true, filter: false, show: true, edit: true },
                
                position: 1,
                sort :false,
                reference : 'student',

            },
      },
      
    },
  };
};





// const buildvolunteerResource = (sequelize) => {
//     const Volunteer = sequelize.define('volunteer', {
//       roll: {
//         type: DataTypes.STRING,
//         primaryKey: true,
//         references: {
//           model: 'student',
//           key: 'roll',
//         },
//       },
//     }, {
//       tableName: 'volunteer',
//       timestamps: false,
//     });
  
//     return {
//       resource: Volunteer,
//       options: {
//         navigation: {
//           icon: 'volunteers',
//         },
//         properties: {
//           roll: {
//             isVisible: { list: true, filter: false, show: true, edit: true },
//             position: 1,
//             reference: 'roll',
//           },
//         },
//         actions: {
//           list: {
//             handler: async (request, response, data) => {
//               const records = await Volunteer.findAll({
//                 attributes: ['roll'],
//                 raw: true,
//               });
//               return {
//                 records: records.map(record => ({ params: { roll: record.roll } })),
//                 title: 'Volunteer List',
//               };
//             },
//           },
//         },
//       },
//     };
//   };
  

export default buildvolunteerResource;
