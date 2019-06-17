import { Logger, transports } from '@dwd/logger';
import { NextFunction, Request, Response } from "express";
import moment from 'moment';
import config from '../config';

const env = process.env.NODE_ENV || 'development';
const { logpath, logfilename, loglevel } = (config as any)[env].log;

const transportsConfig = [
  new (transports as any).DailyRollingFile({
    filename: logfilename,
    dirname: logpath,
    level: 'info',
    name: 'regneva-info',
    dateToString: (date = new Date()) => moment(date).format('YYYY-MM-DD_HH'),
    separator: '-',
    handleExceptions: true,
    json: false,
    timestamp: () => moment().format('YYYY-MM-DD HH:mm:ss,SSS'),
  })
]

/**
 * logger
 */
export const logger = new Logger({
  dailyRollingFile: `${logpath}/regneva.log`,
  dailyRollingLevel: loglevel,
  dailyRollingDivision: 'hour',
  transports: transportsConfig,
  // override: true,
})

export function accessLogger(req: Request, res: Response, next: NextFunction) {
  if (!req.path.includes('_next') && !req.path.includes('static') && req.path !== '/status') {
    let startTime = Date.now();
    logger.info(`start ${(req as any)['uuid']} ${req.method} ${req.url}`);
    res.on('finish', () => {
      let cost = Date.now() - startTime;
      logger.info(`end ${(req as any)['uuid']} ${req.method} ${req.url} ${res.statusCode} - ${cost} ms`);
    })
  }
  next()
}
