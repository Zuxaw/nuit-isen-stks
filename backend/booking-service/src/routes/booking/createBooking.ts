import express, { Request, Response } from 'express';
import { Booking } from '../../models/booking';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/booking/create', async (req: Request, res: Response) => {
  console.log(getTime() + 'POST: Booking creation');
  const {
    startDate,
    endDate,
    idChamber,
    countAdults,
    countChildren,
    idInvoice,
    supplements,
    idUser,
    emailCustomer,
    nameCustomer,
    surnameCustomer,
    phoneNumber,
    demands,
  } = req.body;

  let errors: string[] = [];
  switch (true) {
    case !startDate:
      errors.push('a start date');
    case !endDate:
      errors.push('an end date');
    case !idChamber:
      errors.push('an id for the chamber');
    case !countAdults:
      errors.push('the number of adults');
    case !countChildren:
      errors.push('the number of children');
    case !idInvoice:
      errors.push('an id for the invoice');
    case !emailCustomer:
      errors.push('the customer email');
  }

  if (errors.length > 0) {
    const errorMessage = getTime() + 'Please specify: ' + errors.join(', ') + '.';
    console.error(errorMessage);
    return res.status(400).send(errorMessage);
  }

  const booking = Booking.build({
    startDate,
    endDate,
    idChamber,
    countAdults,
    countChildren,
    idInvoice,
    supplements,
    idUser,
    emailCustomer,
    nameCustomer,
    surnameCustomer,
    phoneNumber,
    demands,
  });
  await booking.save();

  console.log(getTime() + 'POST: Booking is created');
  res.status(201).send(booking);
});

export { router as createBooking };
