class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    return this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += item + ' ';
    }
    return result;
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  /* 入队 */
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
  /* 出队 */
  dequeue() {
    return super.dequeue();
  }
  /* 查看前端元素 */
  front() {
    return super.front();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
  }

  toString(){
    
  }
}