import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

const app = express();
const PORT = 8080;

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware to parse JSON data
app.use(express.json());

// Middleware to use the routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
