import express from "express"
import {
    addReviewToRestaurant, 
    createNewRestaurant, 
    getAllRestaurants, 
    getRestaurant, 
    loginRestaurant 
} from "./restaurants.controller.js"


const restaurantsRouter = express.Router()
restaurantsRouter.get("/", getAllRestaurants)
restaurantsRouter.post("/signup", createNewRestaurant)
restaurantsRouter.post("/login", loginRestaurant)
restaurantsRouter.post("/reviews/add", addReviewToRestaurant)
restaurantsRouter.get("/:id", getRestaurant)

export default restaurantsRouter