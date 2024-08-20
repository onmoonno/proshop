import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

connectDB();

const port = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes); // everytime use the productRoutes, first hit /api/products

app.listen(port, () => console.log(`Server running on port ${port}`));
