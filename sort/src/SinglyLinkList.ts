import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  prev: null = null;
  constructor(public value: number) {}
}

export class SinglyLinkList extends Sorter {
  head: Node | null = null;
  tail: Node | null = null;
  length = 0;
  push(value: number): SinglyLinkList {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  at(index: number): Node {
    if (index >= this.length) throw new Error('Index out of bounds');
    let head = this.head;
    let i = -1;
    while (++i < index) {
      head = head?.next || null;
    }
    if (head) return head;
    throw new Error('List is empty');
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftHand;
  }
  print(): void {
    let head = this.head;
    let i = -1;
    while (++i < this.length) {
      console.log(head?.value);
      head = head?.next || null;
    }
  }
}
