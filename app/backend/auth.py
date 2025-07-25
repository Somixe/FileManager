from pydantic import BaseModel

class LoginData(BaseModel):
    email: str
    password: str

def check_user(email: str, password: str) -> bool:
    # Ici tu fais ta logique MongoDB pour vérifier le user
    # Exemple temporaire:
    if email == "test@example.com" and password == "secret":
        return True
    return False
