### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  A: Not sure what specifics they are looking for but some examples: async/await functions, promises with .then, callbacks

- What is a Promise?

  A) A promise is a placeholder that is a guarantee for some later value that will come once the asynchronous process concludes

- What are the differences between an async function and a regular function?

  A) An async function will always return a promise

- What is the difference between Node.js and Express.js?

  A) Node is a way of writing and managing command-line javascript, instead of browser-based javascript. Express.js is a framework for creating server-side javascript code

- What is the error-first callback pattern?

  A) first argument to the callback is an error object if there are any errors, with any other parameters coming after. Thus, errors can be handled

- What is middleware?

  A) Middleware is any function that runs in the middle of the req/res cycle

- What does the `next` function do?

  A) calling next() tells express to move on to the next task, whether its the next matching route handler or middleware or error handler, this way code isn't halted.

- What does `RETURNING` do in SQL? When would you use it?

  Haven't learned this yet but with some research, it returns whatever data is being inserted into a table to be used in APIs

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
A) No error handling at all, this could have easily been made into a Promise.all() since each request is not dependent on the previous one, there may be a better way to get individual users that can be called here. This is an async function which should return a promise. 