import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe, StripePaymentElementOptions } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51L0Q21GEbXkm4zaAJdvkfYTxwMuaXvMpFLJi80rCAkD7GlNyvSfIOvCOwCpfaWdcTAGYnV2seHRi6JBhVUkXTjSy00uCokMQ9c'
);

export default function Payment() {
  //const [clientSecret, setClientSecret]: StripePaymentElementOptions = useState(""); 
  useEffect(() => {
    async function createPaymentIntent() {
      const stripe = (await stripePromise) as any;
      const { error, client_secret } = await stripe.paymentIntents.create({
        amount: 999,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      if (error) {
        console.log(error.message);
      } else {
        console.log(client_secret);
      }
    }
    createPaymentIntent();
  }, []);

  return (
    <div>
      {/* {clientSecret && (
        <Elements stripe={stripePromise}>
          <form>
            <PaymentElement options={{ clientSecret }} />
            <button>Submit</button>
          </form>
        </Elements>
      )} */}
    </div>
  );
}
