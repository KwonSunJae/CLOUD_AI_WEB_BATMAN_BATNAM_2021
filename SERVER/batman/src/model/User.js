import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
	username: String,
	hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
	const hash = await bcrypt.hash(password, 10);
	this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
	const result = await bcrypt.compare(password, this.hashedPassword);
	return result;
};

UserSchema.statics.findByUsername = function (username) {
	return this.findOne({ username });
};

UserSchema.methods.serialize = function () {
	return this.username;
};

UserSchema.methods.generateToken = function () {
	const token = jwt.sign(
		{
			_id: this.id,
			username: this.username,
		},
		process.env.JWT_KEY
	);
	return token;
};

const User = model('User', UserSchema);

export default User;