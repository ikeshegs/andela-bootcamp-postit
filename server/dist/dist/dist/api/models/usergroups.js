

module.exports = function (sequelize, DataTypes) {
  const UserGroups = sequelize.define("UserGroups", {
    groupid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    joinedOn: DataTypes.DATE,
    isAdmin: DataTypes.STRING
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here

      }
    }
  });
  return UserGroups;
};
