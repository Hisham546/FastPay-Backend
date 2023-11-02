import express from "express";
import { PORT, mongoDBURL } from "./src/config.js";
import mongoose from 'mongoose';
import TopUpRouter from "./src/routes/topupROutes.js";
const app = express();
//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {

    console.log(request)
    return response.status(234).send('Welcome to FastPay')
});
app.use('/TopUp', TopUpRouter);
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to database');

        app.listen(PORT, () => {
            console.log(`App is listening to port :${PORT}`)

        });

    }).catch((error) => {
        console.log(error)

    });