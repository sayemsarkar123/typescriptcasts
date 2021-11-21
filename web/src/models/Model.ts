import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';
import { HasId } from './Sync';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(values: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callbackFn: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    public attributes: ModelAttributes<T>,
    public sync: Sync<T>,
    public events: Events
  ) {}
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
  set(data: T) {
    this.attributes.set(data);
    this.trigger('change');
  }
  fetch() {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data as T);
    });
  }
  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
