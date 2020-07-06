module.exports = class Stack {
  constructor() {
    // the list of items
    this.items = []
    // the top of the stack
    this.top = null
  }

  // get top of stack
  getTop() {
    if (this.items.length == 0) return null
    return this.top
  }

  // returns true || false
  isEmpty() {
    return this.items.length == 0
  }
  // returns length
  size() {
    return this.items.length
  }

  // keeping track of top of the stack
  push(element) {
    // put element onto stack
    this.items.push(element)
    // set the top to the element we just put on
    this.top = element
  }

  // pop()
  pop() {
    // if 0 return null
    if (this.items.length != 0) {
      // if one element return it, there is no top anymore
      if (this.items.length == 1) {
        this.top = null
        return this.items.pop()
        // if > 1 set top of stack to the one before the value we will pop off
      } else {
        this.top = this.items[this.items.length - 2]
        return this.items.pop()
      }
    } else {
      return null
    }
  }
}
