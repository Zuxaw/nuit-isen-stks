import express, { Request, Response } from 'express';
import stripe from '..';
import Invoice from "../models/invoice";
import getCustomer from '../tools/getCustomer';

const router = express.Router();

router.get("/api/payment/invoices/get", async (req: Request, res: Response) => {
    const { email, status, limit }: any = req.query;
    if (!email) return res.status(400).send('Email is required.');
    if (limit > 100) return res.status(400).send('Limit is too high.');

    const customer = await getCustomer(email);
    const stripeInvoices: any = await stripe.invoices.list({
        customer: customer.id,
        status: status || 'paid',
        limit: limit || 10,
    });

    if (stripeInvoices.data.length === 0)
        return res.status(200).send([]);

    const invoices: Invoice[] = [];
    stripeInvoices.data.map((invoice: any) => {
        const item: any = invoice.lines.data[0];

        invoices.push({
            id: invoice.id,
            url: invoice.hosted_invoice_url,
            description: item.description || '',
            created: invoice.created * 1000,
            quantity: item.quantity || 0,
            price: item.amount / 100. || 0,
            currency: invoice.currency,
            total: invoice.total / 100.,
            paid: invoice.paid,
            status: invoice.status
        });
    });
    
    return res.status(200).send(invoices);
});

export { router as getInvoices };

