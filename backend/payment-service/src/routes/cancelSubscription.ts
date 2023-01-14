import express, { Request, Response } from 'express';
import stripe from "..";
import getCustomer from '../tools/getCustomer';
import getSub from "../tools/getSub";

const router = express.Router();

router.post('/api/payment/subscription/cancel', async (req: Request, res: Response) => {
    const { email }: any = req.body;
    if (!email) return res.status(400).send('Email is required');
    
    const customer = await getCustomer(email);
    let subscription = await getSub(customer.id);

    subscription = await stripe.subscriptions.del(subscription.id);
    res.send(subscription.status);
});

export { router as cancelSubscription };