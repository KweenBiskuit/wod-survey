// Example model


module.exports = function(sequelize, DataTypes) {

    var Survey = sequelize.define('Survey', {
        id: {
            type: DataTypes.BIGINT,
            //field: 'Id',
            primaryKey: true,
            autoIncrement: true
        },
        token: DataTypes.STRING,
        mail: DataTypes.STRING,
        startDate: {
            type: DataTypes.DATE,
            field: 'start_date'
        }
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Survey;
};