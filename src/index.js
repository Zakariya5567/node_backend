import dotenv from "dotenv";
dotenv.config(); 

import connectDB from "./db/index.js";

console.log("MONGO_URI:", process.env.MONGODB_URI); // 👈 should print your full URI

connectDB();
