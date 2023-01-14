import { json } from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { getTime } from './tools/time';
import { createIntent } from './routes/createPaymentIntent';

const app = express();

app.use(json(), cors());

app.use(createIntent);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime() + 'Connected to MongoDb');
  } catch (err) {
    console.log('Error connecting to MongoDb');
    console.error(err);
  }

  app.listen(4014, () => {
    console.log(getTime() + 'Listening on port 4014!');
  });
};

start();
