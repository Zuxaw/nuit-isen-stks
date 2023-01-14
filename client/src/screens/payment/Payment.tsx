import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Header from '~/components/header/Header';

const public_key =
  'pk_test_51L0Q21GEbXkm4zaAJdvkfYTxwMuaXvMpFLJi80rCAkD7GlNyvSfIOvCOwCpfaWdcTAGYnV2seHRi6JBhVUkXTjSy00uCokMQ9c';
const private_key =
  'sk_test_51L0Q21GEbXkm4zaAiivqDQ9mNEAS6rp3CmsDdLnYclX8GXXO2wKCjMaX3ycwtN1OQ8RsaGgP4mb7rZpvr0vzNgpz00IQegZzQv';
const stripePromise = loadStripe(public_key);

const Payment = () => {
  const [margin, setMargin] = React.useState(' ml-72');
  const user = useQuery('user');
  //use params
  const { success } = useParams();

  //get clientSecret stripe
  const getClientSecret = async () => {
    //axios post with body and header
    const response = await axios.post(
      'https://api.stripe.com/v1/payment_intents',
      new URLSearchParams({
        amount: '1099',
        currency: 'eur',
        setup_future_usage: 'off_session',
      }),
      {
        headers: {
          Authorization: 'Bearer ' + private_key,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.client_secret;
  };

  const options = {
    clientSecret: '',
  };

  return (
    <div className="flex">
      <Header />
      <div className={'w-full flex justify-center' + margin}>
        <div className="w-96 h-128 mt-28 shadow-lg rounded-lg p-5 border overflow-scroll flex flex-col items-center relative mb-10">
          <h1 className="text-2xl font-semibold text-blue-800">Subscribe to</h1>
          <h3 className="text-xl font-semibold border-b-2">Premium</h3>
          <h3 className="mt-10 text-3xl font-semibold ">10,99 €/month</h3>
          <p className="mt-10">1 Apps</p>
          <p>25 questions /month</p>
          <p>Priority Support</p>
        </div>
        <div className=" ml-2 w-96 h-128 mt-28 shadow-lg rounded-lg px-5 pt-5 border mb-1 overflow-scroll">
          <Elements stripe={stripePromise} options={options}></Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
