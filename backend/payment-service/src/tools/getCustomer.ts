import stripe  from "../index";

export default async function getCustomer(email: string) {
    let customer = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customer.data.length === 0) {
      customer = await stripe.customers.create({
        email: email
      });
      return customer;
    }
    
    return customer.data[0];
  };