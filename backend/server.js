const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose");

app.use(express.json());
const cors=require("cors");
app.use(cors());
const userRoute = require("./routes/userRoute");
mongoose.connect(process.env.URI).
then(()=>
{
    console.log("Connected to MongoDB successfully");

    // Start the server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, (err) => {
        if (err) {
            console.log("Error starting the server:", err);
        } else {
            console.log(`Server is running at port ${PORT}`);
        } });
  

}).catch((error)=>{
    console.log("Database connection error:",error);
    });
    app.use(userRoute);