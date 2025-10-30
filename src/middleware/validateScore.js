import { successResponse, errorResponse } from "../utils/response.js";

export function validateScore(req, res, next) {
  try {
    let { name, score } = req.body;

    if (!name || score === undefined) {
      return errorResponse(res, "Missing name or score")
    }

    if (typeof score !== "number" || !Number.isInteger(score)) {
      return errorResponse(res, "Score must be an integer number")
    }

    name = name.trim().slice(0, 10);

    if (!/^[A-Za-z]+$/.test(name)) {
      return errorResponse("Name can only contain letters")
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    req.body.name = name;
    req.body.score = score;

    next();
  } catch (error) {
    return errorResponse(res, "Invalid request data")
  }
}
