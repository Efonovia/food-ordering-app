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


def generate_menu_item_name():
    """Generate a random menu item name."""
    adjectives = ["Delicious", "Spicy", "Sweet", "Savory", "Exotic"]
    dishes = ["Chicken Curry", "Vegan Burger", "Gluten-Free Pasta", "Grilled Salmon", "Tofu Salad"]
    return random.choice(adjectives) + " " + random.choice(dishes)

restaurant_ids = ["65fefdb589f8405883839250", "65fefdb589f8405883839251", "65fefdb589f8405883839252", "65fefdb589f8405883839253"]
menu_items_with_names = [
    {
        "name": generate_menu_item_name(),
        "restaurantId": restaurant_ids[i % 4],  # Mock ObjectId
        "price": random.choice(range(1, 101)) * 100,  # Prices between 100 and 10000, divisible by 100
        "dietType": random.choice(["Vegan", "Vegetarian", "Gluten-Free", "Meat", "Dairy-Free"]),
        "nutritionalContent": random.sample(nutritional_contents, random.choice(range(3, 7))),  # Example nutritional content values
        "waitTime": random.randint(5, 60)  # Wait times between 5 and 60 minutes
    } for i in range(20)
]

menu_items_json = json.dumps(menu_items_with_names, indent=4)
# print(menu_items_json)

script_dir = os.path.dirname(os.path.abspath(__file__))
data_file_path = os.path.join(script_dir, "sample_menu_item_data.json")
with open(data_file_path, "w") as jsx_file:
    jsx_file.write(menu_items_json)