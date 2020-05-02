import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Article from '../models/Article';

class ArticleController {
	async index(req: Request, res: Response) {
		try {
			const articles = await Article.find({})
				.sort({ created_at: -1 })
				.populate('author');

			return res.json({ articles });
		} catch (err) {
			return res.status(500).json({ err });
		}
	}

	async show(req: Request, res: Response) {
		try {
			const article = await Article.findById(req.params.id).populate('author');

			res.json({ article });
		} catch (err) {
			return res.status(500).json({ err });
		}
	}

	async store(req: Request, res: Response) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(422).json({ errors: errors.array() });
			}

			let article = new Article({
				author: '5ea8004e01678148c9c66ba5',
				title: req.body.title,
				body: req.body.body,
			});

			article = await article.save();

			return res.status(201).json({ article });
		} catch (err) {
			return res.status(500).json({ err });
		}
	}

	async update(req: Request, res: Response) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(422).json({ errors: errors.array() });
			}

			const article = await Article.findById(req.params.id);
			article.title = req.body.title;
			article.body = req.body.body;
			const updatedArticle = await article.save();

			return res.status(200).json({ article: updatedArticle });
		} catch (err) {
			return res.status(500).json({ err });
		}
	}

	async destroy(req: Request, res: Response) {
		try {
			await Article.deleteOne({ _id: req.params.id });

			return res.json({
				msg: 'Selected article has been deleted',
			});
		} catch (err) {
			return res.status(500).json({ err });
		}
	}
}

export default new ArticleController();
