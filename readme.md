## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<h4>getElementById("id") returns a single element (the first and only with that id).
<br>getElementsByClassName("className") returns a live HTMLCollection of all elements with that class.
<br>querySelector("CSS selector") returns the first element matching the given CSS selector.
<br>querySelectorAll("CSS selector") returns a static NodeList of all elements matching the selector. We use it when we want all matches using advanced CSS selectors.
</h4>

## How do you create and insert a new element into the DOM?

<h4> We can create an element by using document.createElement(" ").
<br> We can Insert into the DOM by using methods like: .appendChild() etc.
</h4>

## What is Event Bubbling and how does it work?

<h4>When we click on a child element, the event is first handled by that element. </h4>
<h4>Then it "bubbles up" to its parent, then grandparent, all the way up to the <html> and document. </h4>
<h4>At each level, if a handler for that event type exists, it will run.</h4>

## What is Event Delegation in JavaScript? Why is it useful?

<h4>Event delegation is a technique in JavaScript where we attach a single event listener to a parent element and handle events for its child elements through event bubbling. Instead of adding listeners to each child, the parent listens for events and determines which child triggered it.</h4>
<h4>Using Event Delegation, instead of attaching many listeners (e.g., 100 buttons), we can attach one on their parent. Moreover, it becomes easier to manage one listener than many. </h4>

## What is the difference between preventDefault() and stopPropagation() methods?

<h4> <b>preventDefault()</b> is used when you want to stop the browser’s default action for an event. </h4>
<h4> <b>stopPropagation()</b> is used to stop the event from moving through the DOM event flow. </h4>