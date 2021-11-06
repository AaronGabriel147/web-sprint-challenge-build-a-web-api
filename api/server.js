// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');



const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json())

server.use('/api/projects', projectsRouter); // Connects to the projects router
server.use('/api/actions', actionsRouter); // Connects to the actions router


server.get('/', (req, res) => { // Sanity check to connect to browser or HTTP client.
    res.status(200).json({
        status: 200,
        message: 'Connected to API',
        time: new Date().toLocaleString()
    })
})


// *catch all 404 errors*
// calling next with an arg, sends object inside of next() rather than the default 404.
// If you don't call next with an arg, it will just send a 404 error.
server.use('*', (req, res, next) => {
    next({
        status: 404,
        message: `404 = ${req.method} ${req.originalUrl} not found!`
    })
});


server.use(errorHandling) // will trap "".catch/500 errors" happening above


module.exports = server;



// *catch all 500 errors middleware* 
// Now all .catch's will be handled by the error handling middleware
// All .catch/500 error's now look like this: .catch(next)
// You can also use .catch(err => next(err)) 
// connect this with server.use at the end of the pipeline

// Explanation:
// If there are 4 args in a global function, Express will automatically fire it when -
// nothing accepts the 'next()' in any given endpoint.
// This is the last line of defense by the server.

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        status: 500
    })
}