// // Example model


// module.exports = function(sequelize, DataTypes) {

//     var Response = sequelize.define('Response', {
//         id: {
//             type: DataTypes.BIGINT,
//             //field: 'Id',
//             primaryKey: true,
//             autoIncrement: true
//         },
//         label: DataTypes.STRING
//     }, {
//         classMethods: {
//             associate: function(models) {
//                 // Response.belongsTo(models.Survey, { foreignKey: 'FK_survey', targetKey: 'id' }),
//                 Response.belongsTo(models.Answer, { foreignKey: 'FK_answer', targetKey: 'id' }),
//                 Response.belongsTo(models.Answer, { foreignKey: 'FK_answer', targetKey: 'id' })
//             }
//         }
//     });

//     return Response;
// };