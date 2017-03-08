// Example model


module.exports = function(sequelize, DataTypes) {

    var Answer = sequelize.define('Answer', {
        id: {
            type: DataTypes.BIGINT,
            //field: 'Id',
            primaryKey: true,
            autoIncrement: true
        },
        type: DataTypes.STRING,
        value: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Answer.belongsTo(models.Survey, { foreignKey: 'FK_survey', targetKey: 'id' })
            }
        }
    });

    return Answer;
};