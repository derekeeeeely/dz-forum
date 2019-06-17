import express from 'express';
import { mountMiddlewares, mountErrorHandlers } from './middlewares';
import bootstrap from './utils/bootstrap';

const app = express();

mountMiddlewares(app);

bootstrap(app);

mountErrorHandlers(app);
