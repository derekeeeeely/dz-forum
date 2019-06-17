import { Application } from 'express';
import Kong from '@dwd/kfc';
import { getHandler } from '../middlewares/next';
import config from '../config';
import { logger } from '../middlewares/logger';

export default async function bootstrap(app: Application) {
  const env = process.env.NODE_ENV || 'development';
  const port = (config as any)[env].port;
  const kongconf = (config as any)[env].kong;

  app.use(getHandler());

  if (env !== 'development') {
    // 注册到kong
    const KFC = new Kong({ ...kongconf, logger });

    const server = app.listen(port, () => {
      // 由于注册时需要检查节点健康状态，用于清除旧节点，所以再listen之后注册
      KFC.register();
      logger.info(`server is up at ${port}`, new Date());
    });

    // ensure Graceful shutdown
    process.on('SIGINT', () => {
      logger.info('server is going to close', new Date());
      KFC.unregister().then(() => {
        server.close(() => {
          logger.info('server is successfully Closed', new Date());
          process.exit()
        })
        setTimeout(() => {
          logger.info('server is forcing close', new Date());
          process.exit(1)
        }, 10000)
      })
    })
  } else {
    // 开发环境不注册到kong
    app.listen(port);
    logger.info(`server is up at ${port}`, new Date());
  }
}