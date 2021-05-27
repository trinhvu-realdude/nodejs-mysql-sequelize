module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        }
    });

    return User;
};