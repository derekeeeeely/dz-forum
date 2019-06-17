import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import { Application } from "express";
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import { matchQueryMiddleware } from 'relay-compiler-plus';
import queryMapJson from '../persisted-queries.json';
import uploadHandler from './upload';
import nextRender from './next';
import { graphqlHandler } from './graphql';
import { accessLogger } from './logger';
import { errorHandler } from './error';
import { uuid } from './trace'

const env = process.env.NODE_ENV || 'development';

export function mountMiddlewares(app: Application) {
  // 基础中间件
  app.use(cors({ origin: '*', credentials: true }));
  app.use(uuid);
  app.use(accessLogger);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());

  // upload api
  app.use(fileUpload());
  // app.post('/upload', uploadHandler);

  // 登出
  app.get('/logout', (req, res) => {
    // res.redirect()
  })

  // kong健康检查节点
  app.get('/status', (req, res) => {
    res.end('ok')
  })

  // graphql api
  app.use(matchQueryMiddleware(queryMapJson));
  app.use(graphqlHandler);

  // web端的next ssr
  app.use((nextRender({
    dev: env === 'development',
    dir: resolve(__dirname, '../../../web')
  })) as any)

  return app;
}

export function mountErrorHandlers(app: Application) {
  app.use(errorHandler)
}