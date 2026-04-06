class EventManager {
  constructor(events) {
    this.heap = [];
    this.idToIndex = new Map();
    for (const [id, priority] of events) {
      this.insert(id, priority);
    }
  }

  insert(id, priority) {
    this.heap.push([priority, id]);
    this.idToIndex.set(id, this.heap.length - 1);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parent]) <= 0) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  pollHighest() {
    if (this.heap.length === 0) return -1;
    const [priority, id] = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.idToIndex.delete(id);
    if (this.heap.length > 0) {
      this.sinkDown(0);
    }
    return id;
  }

  updatePriority(eventId, newPriority) {
    const index = this.idToIndex.get(eventId);
    if (index === undefined) return;
    const oldPriority = this.heap[index][0];
    this.heap[index][0] = newPriority;
    if (newPriority > oldPriority) {
      this.bubbleUp(index);
    } else if (newPriority < oldPriority) {
      this.sinkDown(index);
    }
  }

  sinkDown(index) {
    const n = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (left < n && this.compare(this.heap[left], this.heap[largest]) > 0) {
        largest = left;
      }
      if (right < n && this.compare(this.heap[right], this.heap[largest]) > 0) {
        largest = right;
      }
      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  compare(a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return a[1] < b[1] ? 1 : -1;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    this.idToIndex.set(this.heap[i][1], i);
    this.idToIndex.set(this.heap[j][1], j);
  }
}

// Example usage:
const eventManager = new EventManager([[5, 7], [2, 7], [9, 4]]);
console.log(eventManager.pollHighest()); // 2
eventManager.updatePriority(9, 7);
console.log(eventManager.pollHighest()); // 5
console.log(eventManager.pollHighest()); // 9