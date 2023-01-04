import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    title: String,
    roles: [String],
    createdAt: Date,
    lastSeen: Date,
    email: String
});

export default mongoose.models.User || model('User', UserSchema);