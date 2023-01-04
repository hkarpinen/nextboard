import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.DB_URI);

    if(req.method === 'POST') {
        if(process.env.DB_URI) {
            mongoose.connect(process.env.DB_URI);
            const {
                slug,
                author,
                content,
                activity,
                comments
            } = req.body;
        }
        /* client.connect(async(err: any) => {
            const forumSections = await client.db("forum").collection("sections");
            await forumSections.insertOne(req.body);
        });
        client.close();
        res.status(201).send("Success");*/

    }

    if(req.method === 'GET') {
        
    }
}