import express from "express"
import cors from "cors"
import leaderboardRoutes from "./routes/leaderboardRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/score", leaderboardRoutes)

export default app;