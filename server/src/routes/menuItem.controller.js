import MenuItemDatabase from "../models/menuItems.models.js";


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
            reviews: []
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
        return res.status(200).json({ok: true, body: await MenuItemDatabase.find({}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getAllRestaurantMenuItems = async (req, res) => {
    const { id } = req.params
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
        const { query, nutritionalContent, minPrice, maxPrice } = req.query;

        const filter = {};
        
        if (query && query !== "undefined") {
            filter.$text = { $search: query };
        }

        if (nutritionalContent && nutritionalContent!=="undefined") {
            filter.nutritionalContent = { $in: nutritionalContent.split(",") };
        }

        if (minPrice && maxPrice && minPrice !== "undefined" && maxPrice !== "undefined") {
            filter.price = { $gte: minPrice, $lte: maxPrice };
        } else if (minPrice && minPrice !== "undefined") {
            filter.price = { $gte: minPrice };
        } else if (maxPrice && maxPrice !== "undefined") {
            filter.price = { $lte: maxPrice };
        }

        console.log(req.query);

        const menuItems = await MenuItemDatabase.find(filter).sort({ name: 1 });

        return res.status(200).json({ ok: true, body: menuItems })
    } catch (error) {
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