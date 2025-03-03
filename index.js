require('dotenv').config(); // Load .env file // needs to be first
require('colors')

const server = require('./api/server')


const PORT = process.env.PORT || 9000; //  or 3000?

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`.cyan);
});



// npm i express colors helmet cors dotenv
// npm i -D nodemon
// npx gitignore node
// touch .env