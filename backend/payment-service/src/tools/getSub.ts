import stripe  from "../index";

export default async function getSub(customerId: string) {
  let subscription = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
  });

  return (subscription.data.length !== 0) ? subscription.data[0] : {};
};