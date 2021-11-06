const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json())

server.get('/', (req, res) => { // Sanity check to connect to browser or HTTP client.
    res.status(200).json({
        status: 200,
        message: 'Connected to API',
        time: new Date().toLocaleString()
    })
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
