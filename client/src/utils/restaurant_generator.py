from datetime import datetime, timedelta
import random
import json
import os
import uuid

# Function to generate a random date within the last year
def random_date():
    start = datetime.now() - timedelta(days=365)
    end = datetime.now()
    return start + (end - start) * random.random()

# Sample data generator for reviews
def generate_review():
    names = ["Alex Johnson", "Jamie Smith", "Chris Lee", "Sam Morgan", "Jordan Pat", "Casey Lin", "Taylor Kim", "Morgan Alex", "Pat Jordan", "Lin Casey"]
    contents = [
        "Great experience, will come again!", 
        "Good food but the service was slow.", 
        "Loved the ambiance, but the food was average.", 
        "Exceptional service and delicious food.", 
        "Not worth the price.", 
        "Had a wonderful evening, the staff was great.", 
        "The dessert was fantastic, main course not so much.", 
        "Very accommodating for our large group.", 
        "I've had better.", 
        "The chef specials are a must-try!"
    ]
    return {
        "id": str(uuid.uuid4()),
        "reviewer": random.choice(names),
        "content": random.choice(contents),
        "rating": random.randint(1, 5),
        "publishDate": random_date().isoformat()
    }

# Sample data generator for restaurants
def generate_restaurant(index):
    return {
        "name": f"Restaurant {index}",
        "email": f"contact{index}@restaurant.com",
        "password": f"Restaurant {index}",
        "picturePath": f"restaurant{index}.jpg",
        "phoneNumber": f"+123456789{index}",
        "reviews": [generate_review() for _ in range(5)]
    }

# Generate sample data for 10 restaurants
restaurants_data = [generate_restaurant(i) for i in range(1, 11)]

# Convert to JSON format
restaurants_json = json.dumps(restaurants_data, indent=4)
# print(restaurants_json)

script_dir = os.path.dirname(os.path.abspath(__file__))
data_file_path = os.path.join(script_dir, "sample_restaurant_data.json")
with open(data_file_path, "w") as jsx_file:
    jsx_file.write(restaurants_json)