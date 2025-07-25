import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)

# Solution 2 : nom de la base explicitement
db = client["FileManagerApp"]

print("✅ Connexion réussie à la base : Youpi", db.name)
