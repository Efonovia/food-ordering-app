import MenuItemDatabase from "../models/menuItems.models.js";
import { getPagination, getPaginationResults } from "../query.services.js";


export const createNewMenuItem = async (req, res) => {
    try {
        const {
            restaurantId,
            name,
            picturePath,
            price,
            dietType,
            waitTime,
            nutritionalContent,
        } = req.body;

        console.log(req.body);

        // Create a new menuItem record
        const newMenuItem = new MenuItemDatabase({
            restaurantId,
            name,
            picturePath: picturePath || "",
            price,
            dietType,
            waitTime,
            nutritionalContent: nutritionalContent || [],
        });

        // Save the new menuItem record to the database
        await newMenuItem.save();

        console.log('New menuItem added successfully');
        return res.status(201).json({ ok: true, body: newMenuItem });

    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
}

export const getAllMenuItems = async (req, res) => {
    try {
        const { skip, limit, page } = getPagination(req.query)
        const totalDocuments = await MenuItemDatabase.countDocuments()
        const menuItems = await MenuItemDatabase.find({}, { '__v': 0 })
            .sort({ "importantTags.length": -1, "name": -1 })
            .skip(skip)
            .limit(limit);
        return res.status(200).json({ok: true, body: {...getPaginationResults(page, limit, skip, totalDocuments), data: menuItems, totalResults: totalDocuments}})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getAllRestaurantMenuItems = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        return res.status(200).json({ok: true, body: await MenuItemDatabase.find({restaurantId: id}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getMenuItem = async (req, res) => {
    try {
        const { id } = req.params
        const menuItem = await MenuItemDatabase.findById(id)
        return res.status(200).json({ok: true, body: menuItem})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}


export const searchAndFilterMenuItems = async (req, res) => {
    try {
        const { skip, limit, page } = getPagination(req.query);
        const { query, nutritionalContent, minPrice, maxPrice } = req.query;
        console.log(req.query)

        const filter = {};
        
        if (query && query !== "undefined") {
            filter.name = { $regex: query, $options: 'i' }
        }

        if (nutritionalContent && nutritionalContent!=="undefined") {
            filter.nutritionalContent = { $all: nutritionalContent.split(",") };
        }

        if (minPrice && maxPrice && minPrice !== "undefined" && maxPrice !== "undefined") {
            filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
        } else if (minPrice && minPrice !== "undefined") {
            filter.price = { $gte: Number(minPrice) };
        } else if (maxPrice && maxPrice !== "undefined") {
            filter.price = { $lte: Number(maxPrice) };
        }

        console.log(filter);
        const totalDocuments = await MenuItemDatabase.countDocuments(filter)
        const sortedMenuItems = await MenuItemDatabase.find(filter)
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)

        return res.status(200).json({ok: true, body: {...getPaginationResults(page, limit, skip, totalDocuments), data: sortedMenuItems, totalResults: totalDocuments}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false, error: error.message });
    }
}

export const addReviewToMenuItem = async (req, res) => {
    try {
        const { menuItemId, reviewer, content, rating } = req.body;
        console.log(menuItemId, req.body)

        if (!menuItemId || !reviewer || !content || !rating) {
            return res.status(400).json({ ok: false, error: 'Missing required parameters' });
        }
        const menuItem = await MenuItemDatabase.findById(menuItemId);
        console.log(menuItem)
        if (!menuItem) {
            return res.status(404).json({ ok: false, error: 'MenuItem not found' });
        }

        const newReview = {
            id: nanoid(),
            reviewer,
            content,
            rating,
            publishDate: new Date(),
        };

        menuItem.reviews.push(newReview);

        await menuItem.save();

        return res.status(201).json({ ok: true, body: newReview });
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};