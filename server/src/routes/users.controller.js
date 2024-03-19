import UserDatabase from "../models/users.models.js";
import bcrypt from "bcrypt"


export const createNewUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            password,
            email,
            phoneNumber
        } = req.body;

        console.log(req.body);

// Check if the user already exists in the database
        const existingUser = await UserDatabase.findOne({ email: email });

        if (existingUser) {
            console.log("User already exists. Will not create a new record.");
            return res.status(200).json({ ok: false, exists: true, body: existingUser, error: "User with that email already exists" });
        }

// If the user does not exist, proceed with creating a new record
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user record
        const newUser = new UserDatabase({
            firstName,
            lastName,
            email,
            password: passwordHash,
            phoneNumber
        });

        // Save the new user record to the database
        await newUser.save();

        console.log('New user added successfully');
        return res.status(201).json({ ok: true, exists: false, body: newUser });

    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
};

export const loginUser = async(req, res) => {
    try {
      const { email, password } = req.body
      console.log(req.body)
      //Check if the user exists by using their email
      const user = await UserDatabase.findOne({ email: email })
      if(!user) {
        return res.status(400).json({ok: false, error: "No account exists with that email. Create a new account or type the email correctly" })
      }
  
      //Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) return res.status(400).json({ok: false, error: "Incorrect Password" })
  
      
      return res.status(200).json({ ok: true, body: user })
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        return res.status(200).json({ok: true, body: await UserDatabase.find({}, { '_id': 0, '__v': 0 })})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserDatabase.findById(id)
        return res.status(200).json({ok: true, body: user})
    } catch (error) {
        return res.status(404).json({ok: false, error: error.message})
    }
}

export const editUser = async(req, res) => {
    try {
        const { userId, updates } = req.body
        console.log(req.body)
        const user = await UserDatabase.findById(userId);
        
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ok: false, error: "User not found"})
        }

        for (const { field, value } of updates) {
            try {
                if (field === "password") {
                    const salt = await bcrypt.genSalt();
                    const passwordHash = await bcrypt.hash(value, salt);
                    user[field] = passwordHash;
                } else {
                    user[field] = value;
                }
            } catch (error) {
                console.error(`Error updating ${field}: ${error.message}`);
                return res.status(500).json({ ok: false, error: `Error updating ${field}: ${error.message}` });
            }
        }
        
        await user.save()

        const updatedUser = await UserDatabase.findById(userId);
        console.log("fields updated successfully")
        return res.status(201).json({ok: true, body: updatedUser})
    } catch (error) {
        console.error("Error updating" + field +":", error.message);
        return res.status(500).json({ok: false, error: "Error updating :" + field + error.message})
    }
}