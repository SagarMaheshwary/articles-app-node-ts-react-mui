import mongoose, { Document, Types } from 'mongoose';
import User from './User';

const types = mongoose.Schema.Types;

interface IArticleSchema extends Document {
	author: Types.ObjectId;
	title: string;
	body: string;
	created_at: Date;
	updated_at?: Date | null;
}

const articleSchema = new mongoose.Schema({
	author: {
		type: types.ObjectId,
		ref: User,
	},
	title: {
		required: true,
		type: types.String,
	},
	body: {
		required: true,
		type: types.String,
	},
	created_at: {
		required: true,
		type: types.Date,
		default: Date.now(),
	},
	updated_at: {
		type: types.Date,
		default: null,
	},
});

export default mongoose.model<IArticleSchema>('Article', articleSchema);
