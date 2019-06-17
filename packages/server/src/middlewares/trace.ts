import { v4 } from 'uuid'
import { NextFunction, Request, Response } from "express";

export function uuid(req: Request, res: Response, next: NextFunction) {
  let uuid = v4();
  req['uuid'] = uuid;
  res.setHeader('trace-id', uuid);
  next()
}