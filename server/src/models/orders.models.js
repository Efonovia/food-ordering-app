import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurants',
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    note: {
        type: String,
    },
    dateMade: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true })

const Order = mongoose.model("Orders", OrderSchema, "Orders")
export default Order