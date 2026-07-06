import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"])

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Connect to MongoDB
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`✅ Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error("❌ MongoDB connection failed:", error);
    });