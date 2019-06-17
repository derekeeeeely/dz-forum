import { NextFunction, Request, Response } from "express";
import { logger } from './logger';

/**
 * 错误处理handler
 * @param error
 * @param req
 * @param res
 * @param next
 */
export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  logger.error(req.originalUrl, error)
  res.status(500).send(error)
}