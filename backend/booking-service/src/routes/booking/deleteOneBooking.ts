import express, { Request, Response } from 'express';
import { Booking } from '../../models/booking';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get('/api/booking/clear', async (req: Request, res: Response) => {
  const _id = req.query._id;
  if (!_id) {
    return res.status(400).send('Please specify the id');
  }

  console.log(getTime() + 'GET: Delete booking: ' + _id);
  const query = await Booking.deleteOne({ _id });

  console.log(getTime() + 'GET: This booking was deleted');
  res.status(200).send(query);
});

export { router as deleteOneBooking };
