import json
import os


script_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(script_dir, 'specials_menu_item_data.json')
pics_path = os.path.join(script_dir, 'special_menu_pics')

with open(file_path, 'r', encoding='utf-8') as file:
    specials = json.load(file)

images = os.listdir(pics_path)
images.sort(key=lambda name: int(name[:-5]))


for i, img in enumerate(images):
    new_img_name = "_".join(specials[i]["name"].split(" ")) + ".jpeg"
    og_img_path = os.path.join(pics_path, img)
    new_img_path = os.path.join(pics_path, new_img_name)
    os.rename(og_img_path, new_img_path)