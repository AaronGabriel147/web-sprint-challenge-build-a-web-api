// import helper functions from models
const Actions = require('../actions/actions-model');
// get,               // Get all projects.






// validate the user id by checking Projects.get()
// if the user id matches the user id in the database then continue
// if not, return an error
function validateUser(req, res, next) { // validate the user id
    const { id } = req.params;
    Actions.get(id)                  // get the user id from the database
        .then(userId => {
            if (userId) {
                req.user = userId
                next(); // 
            } else {
                next({                                                   // Next is a function that will be called to continue the execution of the route.
                    status: 404,
                    message: 'User ID not found (middleware error)'      // Why does the GET req for an invalid ID return this???? ---> { "message": "User ID not found (middleware error)", "status": 500
                })
                // res.status(404).json({ message: 'User not found' });  // Not sure if this is needed
            }
        })
        .catch(next);
}



module.exports = { validateUser };
