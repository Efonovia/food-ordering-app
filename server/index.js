import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import usersRouter from "./src/routes/users.routes.js";
import restaurantsRouter from "./src/routes/restaurants.routes.js";
import ordersRouter from "./src/routes/orders.routes.js";


// CONFIGURATION
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



//ROUTES
app.get("/", (req, res) => res.send("hello"))
app.use("/users", usersRouter)
app.use("/restaurants", restaurantsRouter)
app.use("/orders", ordersRouter)

//MONGOOSE SETUP
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL).then(() => app.listen(PORT, () => {
    console.log("Connected to mongo database")
    console.log('Server running at PORT: '+PORT)
}))
.catch(err => console.log(err+ " failed to connect to database"))