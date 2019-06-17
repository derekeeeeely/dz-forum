import next from 'next';
import { RequestHandler, Request, Response } from 'express'
import LRUCache from 'lru-cache';
import crypto from 'crypto'
import { logger } from './logger';
import { GraphqlService } from './graphql';
import { getParamPathFromUrl } from '../utils';
import config from '../config';

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 5
})

let app: any = null;
let performQuery: any = null;
const env = process.env.NODE_ENV || 'development';
const serverHost = (config as any)[env].serverHost;

/**
 * next server handler
 * @param options
 */
export default function nextRender(options: any): RequestHandler {
  app = (next as any)(options);
  app.prepare().then(() => console.log('next app prepared'));

  if (!performQuery) {
    GraphqlService.init().then((result) => {
      performQuery = result.performQuery;
    });
  }

  // 根据url判断是否为ssr页面
  return (req, res, next) => {
    const { params, path, needCache } = getParamPathFromUrl(req.url);
    if (path) {
      renderAndCache(req, res, path, params, needCache);
    } else {
      next();
    }
  }
}

function getCacheKey(pagePath: string, queryParams: any) {
  return crypto.createHash('md5').update(`${pagePath}:${JSON.stringify(queryParams)}`).digest('hex')
}

export function getHandler() {
  const handler = app.getRequestHandler();
  return (req: any, res: any, next: any) => {
    handler(req, res)
  }
}

async function renderAndCache(req: Request, res: Response, pagePath: string, queryParams: any, needCache: boolean) {
  const key = getCacheKey(pagePath, queryParams);

  // 服务端直接执行query
  // 服务端的host有时总获取不到，干脆挂上去了
  (req as any).performQuery = performQuery;
  (req as any).serverHost = serverHost;

  if (ssrCache.has(key)) {
    logger.info(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html: any) => {
      // logger.info(`CACHE MISS: ${key}`)
      if (needCache) {
        ssrCache.set(key, html)
      }
      res.send(html)
    })
    .catch((err: any) => {
      logger.error(err);
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
