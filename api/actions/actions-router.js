const router = require('express').Router(); // Set up router.

const Actions = require('./actions-model'); // Import actions model.
// get,    // Get all projects.
// insert, // Add a new project.
// update, // Update a project.
// remove, // Remove a project.

// Router sanity check. 
// THIS WORKS, connected to / api / projects /
// router.get('/', (req, res) => {
//     res.send('ACTIONS!!!! router connected.');
// });


// GET all projects.
router.get('/', (req, res, next) => {
    Actions.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})


// Display all actions for a project.
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Actions.get(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})




// // POST a new action.
// // {
// //     "id": 2,
// //     "name": "Created with POST",
// //     "description": "xxxxxx",
// //     "completed": false
// // }

router.post('/', (req, res, next) => {
    const action = req.body;
    Actions.insert(action)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})


// - [ ] `[PUT] /api/actions/:id`
//   - Returns the updated action as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.
// // PUT an existing project.

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const changes = req.body;
    Actions.update(id, changes)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})


// - Returns no response body.
//   - If there is no action with the given `id` it responds with a status code 404.
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Actions.remove(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})



module.exports = router // Export router.




// Write your "actions" router here!

// Inside `api/actions/actions-router.js` build endpoints for performing CRUD operations on _actions_:

// - [x] `[GET] /api/actions`
//   - Returns an array of actions (or an empty array) as the body of the response.

// - [x] `[GET] /api/actions/:id`
//   - Returns an action with the given `id` as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.

// - [x] `[POST] /api/actions`
//   - Returns the newly created action as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.
//   - When adding an action make sure the `project_id` provided belongs to an existing `project`.

// - [x] `[PUT] /api/actions/:id`
//   - Returns the updated action as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.

// - [ ] `[DELETE] /api/actions/:id`
//   - Returns no response body.
//   - If there is no action with the given `id` it responds with a status code 404.