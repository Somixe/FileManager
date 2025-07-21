from pymongo import MongoClient
from dotenv import load_dotenv
import os

#Charger les variables d'environnement depuis le fichier .env
load_dotenv()

#Récupérer l'URI
uri = os.getenv("MONGODB_URI")

#Connexion à MongoDB
client = MongoClient(uri)

try:
    db_names = client.list_database_names()
    print("✅ Connexion réussie ! Bases disponibles :", db_names)
except Exception as e:
    print("❌ Erreur de connexion :", e)