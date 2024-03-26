import express from "express"
import {
    addReviewToMenuItem, 
    createNewMenuItem, 
    getAllMenuItems, 
    getAllRestaurantMenuItems, 
    getMenuItem,
    searchAndFilterMenuItems, 
} from "./menuItem.controller.js"


const menuItemsRouter = express.Router()
menuItemsRouter.get("/", getAllMenuItems)
menuItemsRouter.post("/create", createNewMenuItem)
menuItemsRouter.post("/reviews/add", addReviewToMenuItem)
menuItemsRouter.get("/restaurant/:id", getAllRestaurantMenuItems)
menuItemsRouter.get("id/:id", getMenuItem)
menuItemsRouter.get("/search", searchAndFilterMenuItems)

export default menuItemsRouter