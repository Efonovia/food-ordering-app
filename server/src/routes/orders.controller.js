import OrderDatabase from "../models/orders.models.js";
import UserDatabase from "../models/users.models.js";
import MenuItemDatabase from "../models/menuItems.models.js";


export const createNewOrder = async (req, res) => {
    try {
        const {
            restaurantId,
            userId,
            items,
            dateMade
        } = req.body;

        console.log(req.body);


        // Create a new order record
        const newOrder = new OrderDatabase({
            restaurantId,
            userId,
            items,
            dateMade,
            completed: false
        });

        // Save the new order record to the database
        await newOrder.save();

        console.log('New order added successfully');
        return res.status(201).json({ ok: true, body: newOrder });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, error: error.message });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderDatabase.find({}, { '__v': 0 })
            .populate({
                path: 'restaurantId',
                select: 'name picturePath _id'
            });

        const modifiedOrders = orders.map(order => {
            const orderObj = order.toObject()
            if (orderObj.restaurantId) {
                orderObj.restaurantName = orderObj.restaurantId.name;
                orderObj.restaurantLogo = orderObj.restaurantId.picturePath;
                orderObj.restaurantId = orderObj.restaurantId._id;
            }
            return orderObj;
        });

        return res.status(200).json({ok: true, body: modifiedOrders});
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message});
    }
}

export const getAllRestaurantOrders = async (req, res) => {
    const { id } = req.params
    try {
        const orders = await OrderDatabase.find({restaurantId: id}, { '__v': 0 })

        return res.status(200).json({ok: true, body: orders});
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message});
    }
}

export const getAllUserOrders = async (req, res) => {
    const { id } = req.params
    try {
        const orders = await OrderDatabase.find({userId: id}, { '__v': 0 })
        .populate({
            path: 'items.menuItem',
            model: MenuItemDatabase,
            select: '_id name price restaurantName restaurantId picturePath waitTime'
        })
        .exec();

        return res.status(200).json({ok: true, body: orders});
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message});
    }
}

export const getOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await OrderDatabase.findById(id)
        .populate({
            path: 'items.menuItem',
            model: MenuItemDatabase,
            select: '_id name price picturePath waitTime'
        })
        .exec();
        // console.log(order)
        const user = await UserDatabase.findById(order.userId)
        return res.status(200).json({ok: true, body: { orderInfo: order, userInfo: user }})
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
        order["dateCompleted"] = new Date()
        await order.save()

        const updatedOrder = await OrderDatabase.findById(id);
        console.log("order completed successfully")
        return res.status(201).json({ok: true, body: updatedOrder})
    } catch (error) {
        console.error("Error completing order" +":", error.message);
        return res.status(500).json({ok: false, error: "Error completing order" +":"+error.message})
    }
}

export const getLatestOrders = async (req, res) => {
    try {
        const userId = req.params.id
        // Step 1: Find the latest dateMade value
        const latestOrder = await OrderDatabase.findOne({ userId })
            .sort({ dateMade: -1 }) // Sort orders by dateMade in descending order
            .exec();

        if (!latestOrder) {
            return res.status(200).json({ ok: true, body: [] });
        }

        const latestDateMade = latestOrder.dateMade;

        // Step 2: Fetch all orders with that dateMade
        const ordersWithLatestDate = await OrderDatabase.find({ userId, dateMade: latestDateMade })
        .populate({
            path: 'items.menuItem',
            model: MenuItemDatabase,
            select: '_id name price restaurantName restaurantId picturePath waitTime'
        })
        .exec();

        res.status(200).json({ ok: true, body: ordersWithLatestDate });
    } catch (error) {
        console.log('Error fetching orders on the latest date:', error);
        res.status(500).json({
            ok: false,
            message: 'An error occurred while fetching orders on the latest date',
            error: error.message
        });
    }
}
