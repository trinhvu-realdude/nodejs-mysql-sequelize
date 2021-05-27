const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);

db.users.belongsToMany(db.tutorials, {
    through: "tutorial_user",
    as: "users",
    foreignKey: "user_id"
});

db.tutorials.belongsToMany(db.users, {
    through: "tutorial_user",
    as: "tutorials",
    foreignKey: "tutorial_id"
});

module.exports = db;