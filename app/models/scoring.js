// // Example model


// module.exports = function(sequelize, DataTypes) {

//     var Scoring = sequelize.define('Scoring', {
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
//                 // Scoring.belongsTo(models.Survey, { foreignKey: 'FK_survey', targetKey: 'id' }),
//             }
//         }
//     });

//     return Scoring;
// };