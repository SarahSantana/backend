import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './error/handler';

const app = express();

app.use(cors());
app.use(express.json()); // fazer express entender json
app.use(routes); // usar as rotas
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);
