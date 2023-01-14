import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51L0Q21GEbXkm4zaAJdvkfYTxwMuaXvMpFLJi80rCAkD7GlNyvSfIOvCOwCpfaWdcTAGYnV2seHRi6JBhVUkXTjSy00uCokMQ9c'
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState(""); 
  useEffect(() => {
    fetch("http://localhost:4014/api/payment/createIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <form>
            <Elements options={options} stripe={stripePromise}/>
            <button>Submit</button>
          </form>
        </Elements>
      )}
    </div>
  );
}
