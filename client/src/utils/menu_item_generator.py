import random
import json
import os


nutritional_contents = [
    'Calories',
    'Protein',
    'Fat',
    'Saturated Fat',
    'Trans Fat',
    'Cholesterol',
    'Sodium',
    'Carbohydrates',
    'Dietary Fiber',
    'Sugars',
    'Added Sugars',
    'Vitamin D',
    'Calcium',
    'Iron',
    'Potassium',
    'Vitamin A',
    'Vitamin C',
    'Vitamin E',
    'Vitamin K',
    'Thiamin (Vitamin B1)',
    'Riboflavin (Vitamin B2)',
    'Niacin (Vitamin B3)',
    'Vitamin B6',
    'Folate (Vitamin B9)',
    'Vitamin B12',
    'Biotin',
    'Pantothenic Acid',
    'Phosphorus',
    'Magnesium',
    'Zinc'
]
food_items = ['Big Boyz Meal', 'Chicken Pieces', 'Chicken Pies', 'Chicken Salad', 'Chief Burger', 'Chief Burger Meal', 'Chips', 'Citizens Meal', 'Citizens Spicy Yam Meal', 'Coleslaw', 'Dodo Chunks', 'Double Chick Whizz', 'Double Chick Whizz Meal', 'Express Meal With Chips', 'Fried Rice', 'Full Chicken', 'Full Flame Grilled', 'Halfflamegrilled 1', 'Half Rotisserie', 'Half Rotisserie Chips Meal', 'Half Rotisserie Meal', 'Jollof Rice', 'Meat Pies', 'Newly Improved Moin Moin', 'New Double Spicy Chickwhizz', 'New Double Spicy Chickwhizz Meal', 'New Spicy Chickwhizz', 'New Spicy Chickwhizz Meal', 'New Spicy Yam Max Meal', 'Original Chickwhizz', 'Original Chickwhizz Meal', 'Pasta Salad', 'Pepper Sauce', 'Quarter Flamer Grilled', 'Quarter Flamer Grilled Chips Meal', 'Quarter Flamer Grilled Rice Meal', 'Quarter Rotisserie', 'Quarter Rotisserie Chips', 'Quarter Rotisserie Meal', 'Refuel Dodo Max Meal', 'Refuel Dodo Meal', 'Refuel Fried Rice Meal', 'Refuel Max Fried Rice Meal', 'Refuel Max Rice Beans Meal', 'Refuel Max Spaghetti Meal', 'Refuel Rice Beans Meal', 'Refuel Spaghetti Meal With Sauce', 'Refuel Spicy Rice Meal', 'Rice Beans', 'Spaghetti', 'Spicy Yam', 'Spicy Yam Meal', 'Wrapstar Meal', 'Wrapstar Stand Alone']

# def generate_menu_item_name():
#     """Generate a random menu item name."""
#     adjectives = ["Delicious", "Spicy", "Sweet", "Savory", "Exotic"]
#     dishes = ["Chicken Curry", "Vegan Burger", "Gluten-Free Pasta", "Grilled Salmon", "Tofu Salad"]
#     return random.choice(adjectives) + " " + random.choice(dishes)

restaurant_ids = ["65fefdb589f8405883839250", "65fefdb589f8405883839251", "65fefdb589f8405883839252", "65fefdb589f8405883839253", "65fefdb589f8405883839254"]
menu_items_with_names = []
restaurant_index = 0

for i, name in enumerate(food_items):
    restaurant_id = restaurant_ids[restaurant_index]
    menu_items_with_names.append(
        {
            "name": name,
            "restaurantId": restaurant_id,
            "price": random.choice(range(1, 101)) * 100,
            "dietType": random.choice(["Paleo", "Ketogenic", "Gluten-Free", "Meat", "Flexitarian"]),
            "nutritionalContent": random.sample(nutritional_contents, random.choice(range(3, 7))),
            "waitTime": random.randint(1, 5),
            "special": "none"
        }
    )
    restaurant_index = (restaurant_index + 1) % len(restaurant_ids)

menu_items_json = json.dumps(menu_items_with_names, indent=4)
print(menu_items_json)

script_dir = os.path.dirname(os.path.abspath(__file__))
data_file_path = os.path.join(script_dir, "sample_menu_item_data.json")
with open(data_file_path, "w") as file:
    file.write(menu_items_json)