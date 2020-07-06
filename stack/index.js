const Stack = require("./Stack")

const isBalanced = (exp) => {
  let myStack = new Stack()
  // iterate through the string exp
  for (let i = 0; i < exp.length; i++) {
    // for every closing perenthesis check for its opening parenthesis in the stack
    if (exp[i] == "}" || exp[i] == ")" || exp[i] == "]") {
      if (myStack.isEmpty()) {
        return false
      }
      let output = myStack.pop()
      //If you can't find the opening parentheses for any closing one then returns false.
      // returns as soon as one of the pairs dont match
      if (
        (exp[i] == "}" && output != "{") ||
        (exp[i] == ")" && output != "(") ||
        (exp[i] == "]" && output != "[")
      ) {
        return false
      }
    } else {
      //For each opening parentheses, push it into stack
      myStack.push(exp[i])
    }
  }
  //after complete traversal of string exp, if there's any opening parentheses left
  //in stack then also return false.
  if (myStack.isEmpty() == false) {
    return false
  }
  //At the end return true if you haven't encountered any of the above false conditions.
  return true
}

var inputString = "{[()]}"
console.log(inputString)
console.log(isBalanced(inputString))

inputString = "{[([({))]}}"
console.log(inputString)
console.log(isBalanced(inputString))
