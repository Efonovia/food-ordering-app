import { nanoid } from "nanoid";
import RestaurantDatabase from "../models/restaurants.models.js";
import bcrypt from "bcrypt"
import path from "path"
import { getDirname } from "../query.services.js";


export const createNewRestaurant = async (req, res) => {
    try {
        const {
            name,
            password,
            email,
            phoneNumber,
            picturePath,
            reviews
        } = req.body;

        console.log(req.body);

// Check if the restaurant already exists in the database
        const existingRestaurant = await RestaurantDatabase.findOne({ email: email });

        if (existingRestaurant) {
            console.log("Restaurant already exists. Will not create a new record.");
            return res.status(200).json({ ok: false, exists: true, body: existingRestaurant, error: "that email already exists" });
        }

// If the restaurant does not exist, proceed with creating a new record
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new restaurant record
        const newRestaurant = new RestaurantDatabase({
            name,
            email,
            password: passwordHash,
            phoneNumber,
            picturePath,
            reviews
        });

        // Save the new restaurant record to the database
        await newRestaurant.save();

        console.log('New restaurant added successfully');
        return res.status(201).json({ ok: true, exists: false, body: newRestaurant });

    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};

export const loginRestaurant = async(req, res) => {
    try {
      const { email, password } = req.body
      console.log(req.body)
      //Check if the restaurant exists by using their email
      const restaurant = await RestaurantDatabase.findOne({ email: email })
      if(!restaurant) {
        return res.status(400).json({ok: false, error: "No account exists with that email or you are not a registered restaurant. Create a new account or type the email correctly" })
      }
  
      //Check if password is correct
      const isMatch = password === restaurant.password
      if(!isMatch) return res.status(400).json({ok: false, error: "Incorrect Password" })
  
      
      return res.status(200).json({ ok: true, body: restaurant })
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message })
    }
}

export const getAllRestaurants = async (req, res) => {
    try {
        return res.status(200).json({ok: true, body: await RestaurantDatabase.find({}, { '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getRestaurant = async (req, res) => {
    try {
        const { id } = req.params
        const restaurant = await RestaurantDatabase.findById(id)
        return res.status(200).json({ok: true, body: restaurant})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const addReviewToRestaurant = async (req, res) => {
    try {
        const { restaurantId, reviewer, content, rating } = req.body;
        console.log(restaurantId, req.body)

        if (!restaurantId || !reviewer || !content || !rating) {
            return res.status(400).json({ ok: false, error: 'Missing required parameters' });
        }
        const restaurant = await RestaurantDatabase.findById(restaurantId);
        console.log(restaurant)
        if (!restaurant) {
            return res.status(404).json({ ok: false, error: 'Restaurant not found' });
        }

        const newReview = {
            id: nanoid(),
            reviewer,
            content,
            rating,
            publishDate: new Date(),
        };

        restaurant.reviews.push(newReview);

        await restaurant.save();

        return res.status(201).json({ ok: true, body: newReview });
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};

export const getRestaurantPic = async (req, res) => {
    try {
        const { picturePath } = req.params
        return res.sendFile(path.join(getDirname(), "../src/public/uploads/restaurants", picturePath))
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}