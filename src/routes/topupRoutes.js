import express from 'express';
import { TopUp } from '../modals/topupModal.js';

const TopUpRouter = express.Router();
//To update any amount to database
TopUpRouter.post('/', async (request, response) => {
    console.log('Request received:', {
        body: request.body,
        headers: request.headers,
        method: request.method,
        url: request.url
    });
    try {
        if (
            !request.body.amount

        ) {
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const newAmount = {

            amount: request.body.amount,

        };
        const result = await TopUp.create(newAmount);
        return response.status(201).send(result)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }

})


//Route for fetch data from database
TopUpRouter.get('/', async (request, response) => {

    try {
        const amount = await TopUp.find({});
        return response.status(200).json({
            status: 200,
            count: amount.length,
            data: amount,

        })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});
export default TopUpRouter;