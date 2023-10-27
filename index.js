import express from "express";
import { PORT } from "./src/config.js";
const app = express();
//Middleware for parsing request body
app.use(express.json());
app.get('/', (request, response) => {

    console.log(request)
    return response.status(234).send('Welcome to FastPay')
});
app.listen(PORT, () => {
    console.log(`App is listening to port :${PORT}`)

});