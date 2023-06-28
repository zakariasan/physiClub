const Post = require("../models/Posts");

//Get user info : Read
module.exports = {
  createPost : async (req, res) => {
	try {
		const { userId, description, picturePath } = req.body;
		const user = await Post.findById(userId);
		const newPost = new Post({
			userId,
			firstName: user.firstName,
			lastName: user.lastName,
			location: user.location,
			description,
			picturePath,
			userPicturePath: user.picturePath,
			likes: {},
			comments: [],
		});
		await newPost.save();

		const post = await Post.find();

		res.status(201).json(post);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
},
	getFeedPosts : async (req, res) => {
	try {
		const post = await Post.find();

		res.status(200).json(post);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
},
	getUserPosts : async (req, res) => {
	try {
		const { userId } = req.params;

		const post = await Post.find({ userId });

		res.status(200).json(post);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
},
	likePost : async (req, res) => {
	try {
		const { id } = req.params;
		const { userId } = req.body;
		const post = await Post.findById({ id });
		const isLiked = post.likes.get(userId);

		if (isLiked) {
			post.likes.delete(userId);
		} else {
			post.likes.set(userId, true);
		}
		const updatePost = await Post.findByIdAndUpdate(id, {
			likes: post.likes,
		}, {new : true});

		res.status(200).json(updatePost);
	} catch (err) {
		res.status(404).json({ message: error.message });
	}
	}
}


//module.exports = {likePosts, createPost , getFeedPosts, getUserPosts }
