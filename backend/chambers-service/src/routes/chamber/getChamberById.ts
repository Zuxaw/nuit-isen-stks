import express, { Request, Response } from 'express';
import { Chamber } from '../../models/chamber';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/chamber',
    async (req: Request, res: Response) => {
        const _id = req.query._id;
        if (!_id) {
            return res.status(400).send("Please specify the id");
        }

        console.log(getTime()+'GET: Get Chamber by id'+ _id);

        const query = await Chamber.findOne({ _id });

        if (!query) {
            console.log("Chamber not found!");
            return res.status(404).send("Chamber not found.");
        }

        console.log(getTime()+'POST: Chamber by id is returned');
        res.status(200).send(query);
    }
)

export { router as getChamberById };