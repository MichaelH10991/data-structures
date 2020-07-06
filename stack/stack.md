# Stack Implementation

1. returns null if list is empty
2. if there is one element return it, there is no top anymore
3. if there is more than one element, set the top of stack to the one before the value we will pop off [ length - 2 ] then pop()

# Stack example

1. iterate through the list
2. if closed parenthesis and stack is empty (closed parenthesis is first element) return false (there cannot be a pair)
3. add open parentheses onto the stack
4. first instance of a closed parenthesis (which isnt the first) pop off the stack and compare. return false if a closed doesnt match an open
5. if havent failed when all have been traversed, return true
