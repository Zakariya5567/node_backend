import dotenv from "dotenv";
dotenv.config({path:'./env'}); 

import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("MONGO_URI:", process.env.MONGODB_URI); // 👈 should print your full URI

connectDB().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
           console.log(`App is listening on port ${process.env.PORT}`)
    })
    console.log(`Database connection established`)
}).catch((error)=>{   
    console.log(`Error on database connection`)
})
 