import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";


const PORT = 8081;
const DB_URL = 'mongodb+srv://sharko:sharko@cluster0.ympfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use(bodyParser.json())


async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log('server started on port ' + PORT))
    } catch (e) {
        console.log(e);
    }
}

startApp()