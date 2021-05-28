module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement : true
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });

    User.associate = (models) => {
        User.belongsTo(models.Tutorial, {
            foreignKey: "tutorial_id",
        });
    };

    return User;
};