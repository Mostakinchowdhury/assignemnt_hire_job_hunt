1. What is the difference between getElementById, getElementsByClassName, and
   querySelector / querySelectorAll?

Answer:

getElementById: We use the getElementById method to access any element from
markup via its id name.

getElementsByClassName: We use the getElementsByClassName method to access any
element from markup via its class name.

querySelector: It is used to access any one element by selecting it like a CSS
selector (#id, .classname, tag, etc). Good to know it returns just the first
matched element with respect to the passed selector string.

querySelectorAll: Same as querySelector, just one difference — it returns all
matched elements as a NodeList instead of returning the first matched element.

2. How do you create and insert a new element into the DOM?

At first, I create an element using document.createElement("tagname") and then
write its textContent or innerHTML, and then I use (its
parent).appendChild(recently created element).

3. What is Event Bubbling? And how does it work?

Event bubbling is a process that means when any element triggers an event, it
bubbles up to its parent and then to the grandparent like a bubble. It triggers
its parent also. The process continues until it reaches the body.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a process where we attach an event listener to a parent
element instead of attaching it to multiple child elements. Because of event
bubbling, when a child element triggers an event, the parent can catch it.

It is useful because we don’t need to add event listeners to every child element
separately. It improves performance and works even for dynamically added
elements.

5. What is the difference between preventDefault() and stopPropagation()
   methods?

Answer:

The preventDefault method stops its own default behavior. For example, when we
write preventDefault in a form submit event, it stops the window from reloading,
which was the default behavior of the form submit event.

On the other hand, stopPropagation stops event bubbling that was already
discussed in question 3.
