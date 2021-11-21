import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse): void => {
      const data = response.data as K[];
      this.models = data.map((value: K): T => {
        return this.deserialize(value);
      });
      this.trigger('change');
    });
  }
}
