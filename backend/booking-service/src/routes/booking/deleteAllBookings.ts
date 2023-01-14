import express, { Request, Response } from 'express';
import { Booking } from '../../models/booking';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/bookings/clear', async (req: Request, res: Response) => {
  console.log(getTime() + 'GET: Delete all bookings');
  const query = await Booking.deleteMany();
  console.log(getTime() + 'GET: All bookings have been deleted');
  res.status(200).send(query);
});

export { router as deleteAllBookings };
