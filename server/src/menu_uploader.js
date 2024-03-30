import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import { join } from 'path';
import MenuItem from './models/menuItems.models.js'; // Adjust the path to where your MenuItem model is defined
import Restaurant from './models/restaurants.models.js'; // Adjust the path to where your MenuItem model is defined

const connectionString = '';//!insert MONGO_URL

mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB:', err));


async function insertMenuItemsFromJSON(filePath) {
    try {
      const data = readFileSync(filePath, 'utf8');
      let menuItems = JSON.parse(data);
  
      // Assuming you have a small number of unique restaurantIds
      // If you have many, consider a more efficient way to fetch and map restaurant data
      const restaurantIds = [...new Set(menuItems.map(item => item.restaurantId))];
      const restaurants = await Promise.all(
        restaurantIds.map(id => Restaurant.findById(id))
      );
      const restaurantMap = restaurants.reduce((acc, curr) => {
        acc[curr._id] = curr;
        return acc;
      }, {});
  
      menuItems = menuItems.map(item => {
        if (restaurantMap[item.restaurantId]) {
          return {
            ...item,
            restaurantName: restaurantMap[item.restaurantId].name,
            restaurantLogo: restaurantMap[item.restaurantId].picturePath,
          };
        }
        return item;
      });
  
      await MenuItem.insertMany(menuItems);
      console.log('All menu items have been successfully inserted.');
    } catch (error) {
      console.error('Error inserting menu items:', error);
    }
  }

// C:\Users\Efosa1\Desktop\Command Central\pending\food ordering app\client\src\utils\sample_menu_item_data.json
// Adjust the file path as necessary
const filePath = join(process.cwd(), './client/src/utils/sample_menu_item_data.json');
console.log(filePath)
// insertMenuItemsFromJSON(filePath);
