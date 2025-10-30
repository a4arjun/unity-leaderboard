import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export const Leaderboard = sequelize.define("leaderboard", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

await sequelize.sync();

export default sequelize;