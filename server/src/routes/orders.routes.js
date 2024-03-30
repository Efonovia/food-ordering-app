import express from "express"
import {
    completeOrder,
    createNewOrder,
    getAllOrders,
    getAllRestaurantOrders,
    getAllUserOrders,
    getLatestOrders,
    getOrder
} from "./orders.controller.js"


const ordersRouter = express.Router()

ordersRouter.get("/", getAllOrders)
ordersRouter.get("/restaurant/:id", getAllRestaurantOrders)
ordersRouter.get("/user/:id", getAllUserOrders)
ordersRouter.get("/user/:id/latest", getLatestOrders)
ordersRouter.post("/create", createNewOrder)
ordersRouter.post("/complete/:id", completeOrder)
ordersRouter.get("/id/:id", getOrder)


export default ordersRouter