import { Leaderboard } from "../models/Leaderboard.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const submitScore = async (req, res) => {
  try {
    const { name, score } = req.body;
    await Leaderboard.create({ name, score });
    return successResponse(res, "Score submitted successfully");
  } catch (error) {
    return errorResponse(res, "Failed to submit score", 500);
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const top = await Leaderboard.findAll({
      order: [["score", "DESC"]],
      limit: 10,
    });
    return successResponse(res, "Leaderboard fetched successfully", top);
  } catch (error) {
    return errorResponse(res, "Failed to fetch leaderboard", 500);
  }
};
