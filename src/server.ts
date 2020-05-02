import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from './config/database';
import router from './routes';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', router);

mongoose
	.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbname}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Database connected...'))
	.catch((err) => console.error(err));

const port: Number = parseInt(process.env.APP_PORT);

app.listen(port, () => console.log(`Server started on port: ${port}`));
