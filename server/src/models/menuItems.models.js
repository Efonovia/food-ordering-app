import mongoose from "mongoose";
import RestaurantDatabase from "./restaurants.models.js";

const MenuItemSchema = mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        ref: 'Restaurants',
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    restaurantLogo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    special: {
        type: String,
    },
    picturePath: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    dietType: {
        type: String,
        required: true,
    },
    nutritionalContent: {
        type: Array,
        required: true
    },
    waitTime: {
        type: Number,
        required: true
    }
}, { timestamps: true })

MenuItemSchema.pre('save', async function(next) {
    try {
        const restaurant = await RestaurantDatabase.findById(this.restaurantId);
        if (restaurant) {
            this.restaurantLogo = restaurant.picturePath;
            this.restaurantName = restaurant.name;
        }
        next();
    } catch (error) {
        next(error);
    }
});

const MenuItem = mongoose.model("MenuItems", MenuItemSchema, "MenuItems")
export default MenuItem