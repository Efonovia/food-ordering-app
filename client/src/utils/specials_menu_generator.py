import random
import json
import os


diabetes = """Grilled Salmon Salad Supreme
Low Glycemic Index
Omega-3 Fatty Acids, Vitamin D, Selenium

Vegetable Stir-Fry with Tofu
High Fiber
Vitamin C, Vitamin K, Iron

Turkey and Quinoa Stuffed Bell Peppers
Balanced Macronutrients
Vitamin A, Vitamin C, Potassium

Zucchini Noodles with Chicken Alfredo
Low Carbohydrate
Calcium, Vitamin B12, Zinc

Mediterranean Grilled Veggie Platter
Antioxidant-Rich
Fiber, Vitamin-E, Potassium"""

lactose_intolerance = """Coconut Curry Tofu
Dairy-Free
Iron, Calcium (from tofu), Vitamin C

Quinoa Salad with Citrus Vinaigrette
Lactose-Free
Protein, Fiber, Vitamin A, Vitamin C

Chickpea and Spinach Curry
Vegan
Folate, Iron, Magnesium

Grilled Portobello Mushroom Burgers
Dairy-Free
Protein, Fiber, Vitamin D

Vegetable Coconut Curry Soup
Lactose-Free
Vitamin A, Vitamin-C, Fiber"""

obesity = """Grilled Chicken and Vegetable Skewers
Low Calorie
Protein, Fiber, Vitamin C

Quinoa and Black Bean Salad
High Fiber
Protein, Iron, Folate

Stuffed Bell Peppers with Lean Turkey
Balanced Macronutrients
Vitamin A, Vitamin C, Potassium

Vegetable and Lentil Soup
Low Calorie
Fiber, Protein, Vitamin K

Salmon and Asparagus Foil Packets
Omega-3 Fatty Acids
Protein, Fiber, Vitamin-K"""
restaurant_ids = ["65fefdb589f8405883839250", "65fefdb589f8405883839251", "65fefdb589f8405883839252", "65fefdb589f8405883839253", "65fefdb589f8405883839254"]
restaurant_index = 0


specials_menu_item_data = []
itrs = [diabetes, lactose_intolerance, obesity]
itrs_names = ['diabetes', 'lactose intolerance', 'obesity']

for j, special in enumerate(itrs):
    for i, el in enumerate(special.split("\n\n")):
        print(el)
        ind = el.split("\n")
        obj = {
                "restaurantId": restaurant_ids[i],
                "name": ind[0], 
                "dietType": ind[1], 
                "nutritionalContent": ind[2].split(", "), 
                "special": itrs_names[j],
                "price": random.choice(range(1, 101)) * 100,
                "waitTime": random.randint(1, 6)
            }
        specials_menu_item_data.append(obj)



menu_items_json = json.dumps(specials_menu_item_data, indent=4)
print(menu_items_json)

script_dir = os.path.dirname(os.path.abspath(__file__))
data_file_path = os.path.join(script_dir, "specials_menu_item_data.json")
with open(data_file_path, "w") as file:
    file.write(menu_items_json)