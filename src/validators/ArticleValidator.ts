import { check } from 'express-validator';

class ArticleValidator {
	validate() {
		return [
			check('title')
				.not()
				.isEmpty()
				.withMessage('Title field is required')
				.isLength({
					min: 3,
				})
				.withMessage('Title field must have minimum 3 characters'),
			check('body')
				.not()
				.isEmpty()
				.withMessage('Body field is required')
				.isLength({
					min: 10,
				})
				.withMessage('Body field must have minimum 10 characters'),
		];
	}
}

export default new ArticleValidator();
