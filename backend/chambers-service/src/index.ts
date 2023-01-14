import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { createChamber } from './routes/chamber/createChamber';
import { deleteOneChamber } from './routes/chamber/deleteOneChamber';
import { getAllChambers } from './routes/chamber/getAllChambers';
import { getChamberById } from './routes/chamber/getChamberById';
import { getTime } from './tools/time';

const app = express();

app.use(json());

app.use(createChamber);
app.use(getAllChambers);
app.use(getChamberById);
app.use(deleteOneChamber);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017');
    console.log(getTime() + 'Connected to MongoDb');
  } catch (err) {
    console.log('Error connecting to MongoDb');
    console.error(err);
  }

  app.listen(4011, () => {
    console.log(getTime() + 'Listening on port 4011!');
  });
};

start();
