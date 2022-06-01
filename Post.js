import mongoose from "mongoose";

const Post = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    description: { type: String },
    url: { type: String },
    urlToImage: { type: String },
    login: { type: String },
    pass: { type: String },
    root: { type: String },
    type: { type: String }


})

export default mongoose.model('Post', Post)