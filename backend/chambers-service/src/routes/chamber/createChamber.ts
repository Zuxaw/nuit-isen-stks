import express, { Request, Response } from 'express';
import { Chamber } from '../../models/chamber';
import { getTime } from '../../tools/time';

const router = express.Router();

router.post('/api/chamber/create', async (req: Request, res: Response) => {
    console.log(getTime() + 'POST: Post creation');
    const { number, typology, description, pricing, pictures } = req.body;
  
    if(!number || !typology || !pricing) {
      console.log(getTime() + 'Please specify the number, typology and pricing');
      return res.status(400).send('Please specify the number, typology and pricing');
    }
    
    //check if chamber by number already exists
    let chamber = await Chamber.findOneAndUpdate(
      { number },
      {
        number,
        typology,
        description,
        pricing,
        pictures,
      },
      {
        upsert: true,
        new: true,
      }
    );
    
    if (!chamber) {
      const chamberCreated = Chamber.build({
        number,
        typology,
        description,
        pricing,
        pictures,
      });
      await chamberCreated.save();
    
      console.log(getTime() + 'POST: Chamber is updated');
      res.status(201).send(chamberCreated);
    }
    
    console.log(getTime() + 'POST: Chamber is created');
    res.status(201).send(chamber);
  });

  export { router as createChamber };