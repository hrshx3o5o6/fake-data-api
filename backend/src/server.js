import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
// app.use(cors())
// app.use(cors({ origin: "*" })); // Allow all domains

app.use(cors({ 
    origin: "*", // Allows requests from any domain
    methods: ["GET", "POST"], // Allow GET & POST requests
    allowedHeaders: ["Content-Type"]
}));

import userRoutes from "./routes/users.js"
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transactions.js"

// Define API routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Mock Data API 🚀" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🔥 Server running at http://localhost:${PORT}`));

