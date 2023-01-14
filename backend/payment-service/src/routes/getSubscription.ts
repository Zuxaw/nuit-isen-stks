import express, { Request, Response } from 'express';
import stripe from "..";
import Sub from '../models/sub';
import getCustomer from "../tools/getCustomer";
import { getNextPayment, getPlan } from '../tools/subscription';

const router = express.Router();

router.get('/api/payment/subscription/get', async (req: Request, res: Response) => {
    const { email }: any = req.query;
    if (!email) return res.status(400).send('Email is required.');
    
    const customer = await getCustomer(email);
    let stripeSubscription: any = await stripe.subscriptions.list({
      customer: customer.id,
      status : 'active',
      limit: 1,
    });

    if (stripeSubscription.data.length > 0 && stripeSubscription.data[0].status === 'active') {
      stripeSubscription = stripeSubscription.data[0];
      const stripePlan: any = stripeSubscription.plan;

      const subscription: Sub = {
        plan: getPlan(stripePlan.id),
        active: true,
        price: String(stripePlan.amount / 100),
        created: stripeSubscription.created * 1e3,
        interval: stripePlan.interval,
        next_payment: getNextPayment(stripeSubscription.created, stripePlan.interval, Number(stripePlan.interval_count))
      };
      return res.status(200).send(subscription);
    }
    
    const subscription: Sub = {
      plan: 'free',
      active: true,
      price: '0',
      created: 0,
      interval: 'none',
      next_payment: 0
    };
    return res.status(200).send(subscription);
});

export { router as getSubscription };

