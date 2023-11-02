import express from 'express';
import { TopUp } from '../modals/topupModal.js';

const TopUpRouter = express.Router();
TopUpRouter.post('/', async (request, response) => {
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
export default TopUpRouter;