import express, { Router } from 'express';

//validators
import ArticleValidator from '../validators/ArticleValidator';

//controllers
import ArticleController from '../controllers/ArticleController';

const router: Router = express();

router.get('/articles', ArticleController.index);

router.post('/articles', ArticleValidator.validate(), ArticleController.store);

router.get('/articles/:id', ArticleController.show);

router.put(
	'/articles/:id',
	ArticleValidator.validate(),
	ArticleController.update
);

router.delete('/articles/:id', ArticleController.destroy);

export default router;
