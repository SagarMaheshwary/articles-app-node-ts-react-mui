import mongoose, { Document, Types } from 'mongoose';

const types = mongoose.Schema.Types;

interface IUserSchema extends Document {
	name: string;
	email: string;
	password: string;
	verified_at: null | Date;
	created_at: Date;
	updated_at: Date | null;
}

const userSchema = new mongoose.Schema({
	name: {
		required: true,
		type: types.String,
	},
	email: {
		required: true,
		type: types.String,
	},
	password: {
		required: true,
		type: types.String,
	},
	verfied_at: {
		type: types.Date,
		default: null,
	},
	created_at: {
		type: types.Date,
		default: Date.now(),
	},
	updated_at: {
		type: types.Date,
		default: null,
	},
});

export default mongoose.model<IUserSchema>('User', userSchema);
