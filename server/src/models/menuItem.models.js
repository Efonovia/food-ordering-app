import mongoose from "mongoose";

const MenuItemSchema = mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
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
    picturePath: {
        type: String,
        required: true
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
    reviews: {
        type: Array,
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