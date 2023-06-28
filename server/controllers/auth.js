const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

//register User
//

exports.register = async (req, res) => {
	try {
		const { firstName, lastName, email, password, role } = req.body;
		console.log(req.body)
		const salty = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, 10);
		const newUser = new User({
			firstName,
			lastName,
			email,
			password:  passwordHash,
			role,
		});
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (err) {
		res.status(502).json({ error: err.message });
		console.log(err)
	}
};

//***>login in
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });

		if (!user)
			return res.status(400).json({ msg: ">User does not exist. " });
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch)
			return res.status(400).json({ msg: ">Invalid credentials. " });
		const token = jwt.sign({ id: user._id }, process.env.JWT_SEC);
		delete user.password;
		res.status(200).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

//module.exports = { register, login };
