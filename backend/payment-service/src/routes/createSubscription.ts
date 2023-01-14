import express, { Request, Response } from 'express';
import stripe from "..";
import getPriceId from '../tools/getPriceId';
import getCustomer from "../tools/getCustomer";

const router = express.Router();

//create subscription
router.post('/api/payment/subscription/create', async (req: Request, res: Response) => {
    const { email, plan }: any = req.body;
    if (!email) return res.status(400).send('Email is required');
    if (!plan) return res.status(400).send('Plan is required');
    
    const priceId = getPriceId(plan);
    const customer = await getCustomer(email);

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });
    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  });

  export { router as createSubscription };