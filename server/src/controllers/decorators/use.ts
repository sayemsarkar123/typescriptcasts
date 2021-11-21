import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares: RequestHandler[] =
      Reflect.getMetadata(MetadataKeys.middlewares, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.middlewares,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
