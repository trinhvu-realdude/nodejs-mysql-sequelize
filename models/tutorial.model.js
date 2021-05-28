module.exports = (Sequelize, DataTypes) => {
    const Tutorial = Sequelize.define("Tutorial", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: "User",
                key: "id",
            },
            onUpdate: "cascade",
            onDelete: "cascade"
        }
    });

    Tutorial.associate = (models) => {
        Tutorial.belongsTo(models.User, {
            foreignKey: "user_id",
        });
    };

    return Tutorial;
};