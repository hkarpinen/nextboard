import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../model/schema/User";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;
    if(req.method === 'GET') {
        if(process.env.DB_URI && typeof name === 'string') {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                try {
                    const user = await User.findOne({
                        name: name.toLowerCase()
                    });
                    console.log(user);
                    if(user !== null) {
                        res.status(200).json(user);
                        res.end();
                    } else {
                        res.status(400).send(req.query);
                        res.end();
                    }
                } catch(error) {
                    console.log(error);
                }
            })
        }
    }
}