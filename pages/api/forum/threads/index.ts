import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Thread from "../../../../model/schema/Thread";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        const result: any = [];
        if(process.env.DB_URI) {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                const threads = await Thread.find();
                threads.forEach((thread: { content: { title: any; }; slug: any; }) => {
                    result.push({
                        title: thread.content.title,
                        tid: thread.slug
                    });
                });
                res.status(200).send(result);
            });
        }
    } else if(req.method === 'POST') {
        if(process.env.DB_URI) {
            mongoose.connect(process.env.DB_URI, {
                dbName: 'forum'
            }).then(async() => {
                const maxSlug = await Thread.find().sort({
                    slug: -1
                }).limit(1);
                const nextSlug = maxSlug[0] ? maxSlug[0].slug + 1 : 1
                
                const {
                    author,
                    content,
                    activity,
                    comments
                } = req.body;

                await Thread.create({
                    slug: nextSlug,
                    author: author,
                    content: content,
                    activity: activity,
                    comments: comments
                });
            })
            res.status(201).send("Success");
        }
    }
}