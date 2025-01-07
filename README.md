# Express.js Unresponsiveness with Long-Running Request Handlers

This repository demonstrates a common issue in Express.js applications: unresponsiveness caused by request handlers that take an extended period to complete.  The provided code showcases a scenario where a long-running operation (simulated with `setTimeout`) can block the server and lead to a poor user experience.

The `bug.js` file contains the flawed code, and `bugSolution.js` provides a solution using asynchronous operations and error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Send a request to `http://localhost:3000/`.  Notice that it takes 5 seconds to respond, and during this time no further requests can be handled.
5. Now, run `node bugSolution.js`.  This version handles the request asynchronously and will remain responsive.