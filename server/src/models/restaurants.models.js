import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        min: 2,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 50,
    },
    picturePath: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: "",
    },
    menu: {
        type: Array,
        default: [],
    },
    reviews: {
        type: Array,
        default: [],
    }
}, { timestamps: true })

const Restaurant = mongoose.model("Restaurants", RestaurantSchema, "Restaurants")
export default Restaurant