from app.database.mongo import get_collection

users_collection = get_collection("users")

def get_users():
    return list(users_collection.find({}, {"_id": 0}))  # Exclure _id dans l'affichage
