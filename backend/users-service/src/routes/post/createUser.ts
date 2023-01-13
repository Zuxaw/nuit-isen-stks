import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/user/create', async (req: Request, res: Response) => {
  console.log(getTime() + 'POST: User creation');
  const { uid, name, surname, email, phoneNumber, role } = req.body;

  if (!email || !uid || !role) {
    console.log(getTime() + 'Please specify the email, the role or the uid');
    return res.status(400).send('Please specify the email, the role or the uid');
  }

  //check if user already exists
  console.log(email);
  let user = await User.findOneAndUpdate(
    { email },
    {
      uid,
      name,
      surname,
      email,
      phoneNumber,
      role,
    },
    {
      upsert: true,
      new: true,
    }
  );

  if (!user) {
    const userCreated = User.build({
      uid,
      name,
      surname,
      email,
      phoneNumber,
      role,
    });
    await userCreated.save();
    console.log(getTime() + 'POST: User is updated');
    res.status(201).send(userCreated);
  }

  console.log(getTime() + 'POST: User is created');
  res.status(201).send(user);
});

export { router as createUser };