import express from "express"
import { json } from "express";
import { createSubscription } from "./routes/createSubscription";
import { getSubscription } from "./routes/getSubscription";
import { cancelSubscription } from "./routes/cancelSubscription";
import { getInvoices } from "./routes/getInvoices";
import { getTime } from "./tools/time";
const stripe = require('stripe')('sk_test_51L0Q21GEbXkm4zaAiivqDQ9mNEAS6rp3CmsDdLnYclX8GXXO2wKCjMaX3ycwtN1OQ8RsaGgP4mb7rZpvr0vzNgpz00IQegZzQv');

const app = express();
app.use(json());


let http = require("http").createServer(app);

//Route
app.use(getSubscription);
app.use(createSubscription);
app.use(cancelSubscription);
app.use(getInvoices);


const start = async() => {
  app.listen(4013 , () => {
    console.log(getTime()+"App listening on port 4013!");
  })
}

start();
export default stripe;
