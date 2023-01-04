import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ThreadSchema = new Schema({
    slug: Number,
    author: {
        name: String,
        userSlug: String
    },
    content: {
        title: String,
        body: String
    },
    activity: {
        createdAt: Date,
        updatedAt: Date,
        likes: Number
    },
    comments: [{
        user: {
            name: String,
            slug: Number
        },
        content: String,
        likes: Number
    }],
    tags: [String]
});

export default mongoose.models.Thread || model('Thread', ThreadSchema);