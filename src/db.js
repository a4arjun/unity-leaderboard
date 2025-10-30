import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./leaderboard.db",
    logging: false
})

export default sequelize;