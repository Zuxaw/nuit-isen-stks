import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { getTime } from './tools/time';

const app = express();

app.use(json());

// app.use(createChamber);

const start = async () => {

  app.listen(4014, () => {
    console.log(getTime() + 'Listening on port 4014!');
  });
};

start();
