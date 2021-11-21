import 'reflect-metadata';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './methods';

function validateAttributes(attributes: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) return res.send('Invalid Request');

    for (const attribute of attributes) {
      if (!req.body[attribute]) return res.send('Invalid Request');
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares: RequestHandler[] =
        Reflect.getMetadata(MetadataKeys.middlewares, target.prototype, key) ||
        [];
      const attrs: string[] =
        Reflect.getMetadata(MetadataKeys.attributes, target.prototype, key) ||
        [];

      const validateHandler: RequestHandler = validateAttributes(attrs);

      if (path)
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validateHandler,
          routeHandler
        );
    }
  };
}
