import OrderDatabase from "../models/orders.models.js";


export const createNewOrder = async (req, res) => {
    try {
        const {
            restaurantId,
            userId,
            items,
        } = req.body;

        console.log(req.body);

        // Create a new order record
        const newOrder = new OrderDatabase({
            restaurantId,
            userId,
            items,
            dateMade: new Date(),
            completed: false
        });

        // Save the new order record to the database
        await newOrder.save();

        console.log('New order added successfully');
        return res.status(201).json({ ok: true, body: newOrder });

    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        return res.status(200).json({ok: true, body: await OrderDatabase.find({}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getAllRestaurantOrders = async (req, res) => {
    const { id } = req.params
    try {
        return res.status(200).json({ok: true, body: await OrderDatabase.find({restaurantId: id}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getAllUserOrders = async (req, res) => {
    const { id } = req.params
    try {
        return res.status(200).json({ok: true, body: await OrderDatabase.find({userId: id}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await OrderDatabase.findById(id)
        return res.status(200).json({ok: true, body: order})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const completeOrder = async(req, res) => {
    try {
        const { id } = req.params
        const order = await OrderDatabase.findById(id);
        
        if (!order) {
            console.log("Order not found");
            return res.status(404).json({ok: false, error: "Order not found"})
        }

        order["completed"] = true;
        await order.save()

        const updatedOrder = await OrderDatabase.findById(id);
        console.log("order completed successfully")
        return res.status(201).json({ok: true, body: updatedOrder})
    } catch (error) {
        console.error("Error completing order" +":", error.message);
        return res.status(500).json({ok: false, error: "Error completing order" +":"+error.message})
    }
}