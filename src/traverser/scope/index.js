export default class Scope {
  constructor() {
    this.stack = [new Map()];
  }

  createScope() {
    this.stack.push(new Map());
  }

  exitScope() {
    this.stack.pop();
  }

  addNode(identifier, node) {
    const lastIndex = this.stack.length - 1;
    const map = this.stack[lastIndex];
    map.set(identifier, node);
  }

  getNode(identifier) {
    for (let i = 0; i < this.stack.length; i += 1) {
      const map = this.stack[i];
      if (map.has(identifier)) {
        return map.get(identifier);
      }
    }
    throw new Error('identifier not found in scope!');
  }
}
