import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import mongoose from "mongoose";

/*
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
   || 'mongodb://localhost:27017/tuiter'
console.log(CONNECTION_STRING)
 */
const CONNECTION_STRING = 'mongodb+srv://echen9104:eric@cluster0.ibvarg8.mongodb.net/tuiter?retryWrites=true&w=majority'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)