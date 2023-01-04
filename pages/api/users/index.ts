import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import User from "../../../model/schema/User";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        const result: any = [];
        if(process.env.DB_URI) {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                const users = await User.find();
                users.forEach((user) => {
                    result.push({
                        name: user.name
                    })
                });
                res.status(200).send(result);
            });
        }
    }
    if(req.method === 'POST') {
        if(process.env.DB_URI) {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                const {
                    name,
                    title,
                    roles,
                    createdAt,
                    lastSeen,
                    email
                } = req.body;

                const usernameExists = await User.exists({ name: name });
                const emailExists = await User.exists({ email: email });

                if(usernameExists !== null) {
                    res.status(400).send(`Username is not available: ${name}`);
                    res.end();
                    return;
                }

                if(emailExists !== null) {
                    res.status(400).send(`Email is not available: ${email}`);
                    res.end();
                    return;
                }

                await User.create({
                    name: name.toLowerCase(),
                    title: title,
                    roles: roles,
                    createdAt: createdAt,
                    lastSeen: lastSeen,
                    email: email
                });

                res.status(200).json(req.body);
            })
        }
    }
}