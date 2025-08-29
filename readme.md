Answer the following questions clearly:

1. What is the difference between getElementById, 
getElementsByClassName, and querySelector / querySelectorAll?

Ans: 

Difference by definition:

getElementById => select only id attribute from html document.

getElementsByClassName => select only class attribute from html document and give html collection.

querySelector => select  id  or, class by tag name and return first element of class.

querySelectorAll => select select  id  or, class by tag name and give nodelist of class.

2. How do you create and insert a new element into the DOM?

Ans: 

Step-01 (Create new element):

Call parent:

let parent = document.getElementById('parent');

let newElement = document.createElement('any tag');

newElement.innerHTML = `
  write html code
`
Step-02 (Insert a new element): 

Append time:

parent.append(newElement);

3. What is Event Bubbling and how does it work?

Ans:

Event Bubbling => trigger the event of any element or, child element from parent element.

Working process of Event Bubbling => check and trigger the element that is associated with event handler and then execute the action and reach the parent element.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
 
Event Delegation =>  set event handler in parent and use their child elements to see the action of event. 

Usefulness of Event Delegation => It can collapse the code to reduce the error in coding.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: 

Difference by definition:

preventDefault() => stop default reload on submit event.

stopPropagation() => stay at the current element and stop propagating to 'Event Bubbling'.