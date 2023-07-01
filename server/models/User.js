const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		avatar: {
			type: String,
			default:''
		},
		lastName: {
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
		birthday: {
			type: Date,
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
		},
		phoneNbr: {
			type: Number,
		},
		className: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("user", UserSchema);
