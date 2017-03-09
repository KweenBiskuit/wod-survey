module.exports = function(sequelize, DataTypes) {

    var Title = sequelize.define('Title', {
        id: {
            type: DataTypes.BIGINT,
            //field: 'Id',
            primaryKey: true,
            autoIncrement: true
        },
        label: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
               
            }
        }
    });

    return Title;
};