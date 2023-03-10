import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { createBooking } from './routes/booking/createBooking';
import { deleteAllBookings } from './routes/booking/deleteAllBookings';
import { deleteOneBooking } from './routes/booking/deleteOneBooking';
import { getAllBookings } from './routes/booking/getAllBookings';
import { getTime } from './tools/time';

const app = express();

app.use(json());

app.use(getAllBookings);
app.use(createBooking);
app.use(deleteOneBooking);
app.use(deleteAllBookings);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime() + 'Connected to MongoDb');
  } catch (err) {
    console.log('Error connecting to MongoDb');
    console.error(err);
  }

  app.listen(4012, () => {
    console.log(getTime() + 'Listening on port 4012!');
  });
};

start();
