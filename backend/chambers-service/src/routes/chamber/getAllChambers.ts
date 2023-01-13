import express, { Request, Response } from 'express';
import { Chamber } from '../../models/chamber';
import { getTime } from '../../tools/time';

const router = express.Router();

router.get(
    '/api/chambers',
    async (req: Request, res: Response) => {
        console.log(getTime()+'GET: Get all chambers');

        let limit: number = 500;
        if (req.query.limit) {
            limit = +req.query.limit;
            console.log(limit);
            if (!limit) {
                return res.status(400).send("Bad request limit is not a number");
            }
        }

        const query = await Chamber.find().limit(limit);

        if (!query) {
            console.log("No chamber found!");
            return res.status(400).send("No chamber found.");
        }

        console.log(getTime()+"GET: Chamber list returned");
        res.status(200).send(query);
    }
)

export { router as getAllChambers };