const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const router = require("./Routes/User.routes")
const dotenv = require("dotenv")
const routers = require("./Routes/Job.routes")
const route = require("./Routes/Clients.routes")

const app = express()

dotenv.config({ path: "./.env" })
app.use(cors())
app.use(express.json())
app.use("/", router)
app.use("/", routers)
app.use("/", route)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.error("Database connection error", err);
});

// mongoose.connect("mongodb+srv://ahmed:db3699@cluster0.64w6f0j.mongodb.net/Matrix-Global-Solutions").
//     then(() => {
//         console.log("Db running");
//     })

app.listen(4000, () => {
    console.log("Server Running");
})