module.exports = function(sequelize, DataTypes) {

    var SubTitle = sequelize.define('SubTitle', {
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
               SubTitle.belongsTo(models.Title, { foreignKey: 'FK_title', targetKey: 'id' })
            }
        }
    });

    return SubTitle;
};