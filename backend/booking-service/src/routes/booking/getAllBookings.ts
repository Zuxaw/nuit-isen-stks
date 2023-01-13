import express, { Request, Response } from 'express';
import { Booking } from '../../models/booking';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/bookings', async (req: Request, res: Response) => {
  console.log(getTime() + 'GET: Get all bookings');

  let limit: number = 500;
  if (req.query.limit) {
    limit = +req.query.limit;
    console.log(limit);
    if (!limit) {
      return res.status(400).send('Bad request limit is not a number');
    }
  }

  const query = await Booking.find().limit(limit);

  if (!query) {
    console.log('No booking found!');
    return res.status(400).send('No booking found.');
  }

  console.log(getTime() + 'GET: Booking list returned');
  res.status(200).send(query);
});

export { router as getAllBookings };
