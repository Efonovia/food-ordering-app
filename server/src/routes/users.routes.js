import express from "express"
import { createNewUser, editUser, getAllUsers, getUser, loginUser } from "./users.controller.js"

const usersRouter = express.Router()
usersRouter.get("/", getAllUsers)
usersRouter.post("/signup", createNewUser)
usersRouter.post("/login", loginUser)
usersRouter.post("/edit", editUser)
usersRouter.get("/:id", getUser)

export default usersRouter