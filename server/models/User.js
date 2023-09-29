const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			require: true,
			min: 5,
		},
		role: {
			type: String,
			default: "Teacher",
			enum: ["Teacher", "Student"],
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("user", UserSchema);
