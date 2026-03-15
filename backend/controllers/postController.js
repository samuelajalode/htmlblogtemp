const Post = require('../models/Post');
exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};
exports.createPost = async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post);
}