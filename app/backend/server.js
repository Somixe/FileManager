require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connecté à MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Serveur en cours sur le port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Erreur de connexion MongoDB:", err));
