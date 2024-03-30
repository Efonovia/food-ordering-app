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
    dateMade: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    dateCompleted: {
        type: Date,
        default: null
    },
}, { timestamps: true })


const Order = mongoose.model("Orders", OrderSchema, "Orders")
export default Order