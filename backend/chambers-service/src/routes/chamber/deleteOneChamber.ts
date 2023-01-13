import express, { Request, Response } from 'express';
import { Chamber } from '../../models/chamber';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/chamber/clear',
    async (req: Request, res: Response) => {
        const _id = req.query._id;
        if (!_id){
            return res.status(400).send("Please specify the id");
        }

        console.log(getTime()+'GET: Delete Chamber: '+ _id);
        const query = await Chamber.deleteOne({_id});

        console.log(getTime()+"GET: This Chamber was deleted");
        res.status(200).send(query);
    }
)

export { router as deleteOneChamber };