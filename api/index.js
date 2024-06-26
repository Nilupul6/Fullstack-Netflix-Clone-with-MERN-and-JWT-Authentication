const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/list")
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB connection Succesfull');
}).catch((error)=>{
    console.log(error);
});
app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);



app.listen(8800,()=>{
    console.log("Backend server is running");
})