module.exports = function(sequelize, DataTypes) {

    var Question = sequelize.define('Question', {
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
               Question.belongsTo(models.SubTitle, { foreignKey: 'FK_subTitle', targetKey: 'id' })
            }
        }
    });

    return Question;
};