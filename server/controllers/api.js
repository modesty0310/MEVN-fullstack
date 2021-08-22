const Post = require('../models/post')

module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res){
    try{
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch(err){
      res.status(404).json({message: err.message});
    };
  };
  // fetch all by ID
  static async fetchPostByID(req, res){
    res.send("Fetch Post By ID");
  };
  // create a post
  static async createPost(req, res){
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;
    try{
      await Post.create(post);
      res.status(201).json({message: "Post created successfully !"});
    } catch{
      res.status(400).json({message: err.message});
    }
  };
  // update a post
  static async updatePost(req, res){
    res.send("update Post");
  };
  // update a post
  static async deletePost(req, res){
    res.send("delete post");
  };
};