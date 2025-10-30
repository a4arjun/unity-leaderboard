import express from "express";
import {
  submitScore,
  getLeaderboard,
} from "../controllers/leaderboardController.js";
import { validateScore } from "../middleware/validateScore.js";

const router = express.Router();

router.post("/submit", validateScore, submitScore);
router.get("/leaderboard", getLeaderboard);

export default router;
