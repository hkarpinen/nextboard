import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next"
import Thread from "../../../../model/schema/Thread";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tid } = req.query;
    if(req.method === 'GET') {
        if(process.env.DB_URI && typeof tid === 'string') {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                try {
                    const thread = await Thread.findOne({
                        slug: parseInt(tid)
                    });
                    if(thread !== null) {
                        res.status(200).json(thread);
                        res.end();
                    } else {
                        res.status(400).send(req.query);
                        res.end();
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        }
    }
}