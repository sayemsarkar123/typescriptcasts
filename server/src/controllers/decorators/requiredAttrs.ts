import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function requiredAttrs(...attrs: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.attributes, attrs, target, key);
  };
}
