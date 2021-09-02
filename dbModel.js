import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
    url: String,
    channel: String,
    desc: String,
    song: String,
    likes: Number,
    shares: Number,
    messages: Number
})

export default mongoose.model('posts', postsSchema);