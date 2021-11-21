import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};
  abstract template(): string;
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  reigonsMap(): { [key: string]: string } {
    return {};
  }
  eventsMap(): { [key: string]: () => void } {
    return {};
  }
  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
  mapRegions(fragment: DocumentFragment): void {
    const reigonsMap = this.reigonsMap();
    for (const key in reigonsMap) {
      const selector = reigonsMap[key];
      this.regions[key] = fragment.querySelector(selector);
    }
  }
  onRender(): void {}
  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
