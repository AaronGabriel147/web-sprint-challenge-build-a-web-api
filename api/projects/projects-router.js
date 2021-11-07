const router = require('express').Router(); // Set up router.

const Projects = require('./projects-model'); // Import projects model.
// get,               // Get all projects.
// insert,            // Insert a new project.
// update,            // Update a project.
// remove,            // Remove a project.
// getProjectActions, // Get all actions for a project.

// Router sanity check. 
// THIS WORKS, connected to /api/projects/ 
// router.get('/', (req, res) => {
//     res.send('Projects router connected.');
// });


// GET all projects.
router.get('/', (req, res, next) => {
    Projects.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})


// Display all actions for a project.
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Projects.get(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})





// post router returns a status code 201 and a JSON object containing the new project.
// If the request body is missing any of the required fields it responds with a status code 400.
router.post('/', (req, res, next) => {
    const project = req.body;
    if (project.name && project.description && project.completed === false || project.completed === true) {
        Projects.insert(project)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
    } else {
        res.status(400).json({
            message: "Missing required fields."
        })
    }
})




//   - Returns the updated project as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.

// PUT an existing project.
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const changes = req.body;

    if (changes.name && changes.description && changes.completed === false || changes.completed === true) {
        Projects.update(id, changes)
            .then(project => {
                res.status(200).json(project)
            })
            .catch(next)
    } else {
        res.status(400).json({
            message: "Missing required fields."
        })
    }
})



// Old one for reference. 
// Projects.update(id, changes)
//     .then(project => {
//         res.status(200).json(project)
//     })
//     .catch(next)





// DELETE an existing project.
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    Projects.remove(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})


// Display all actions for a project.
router.get('/:id/actions', (req, res, next) => {
    // const { id } = req.params;    //  Did it another way below for fun.
    Projects.getProjectActions(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})



module.exports = router // Export router.


// Inside `api/projects/projects-router.js` build the following endpoints:

// - [x] `[GET] /api/projects`
//   - Returns an array of projects as the body of the response.
//   - If there are no projects it responds with an empty array.

// - [x] `[GET] /api/projects/:id`
//   - Returns a project with the given `id` as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.





// - [x] `[POST] /api/projects`
//   - Returns the newly created project as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.




// - [x] `[PUT] /api/projects/:id`
//   - Returns the updated project as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.

//   - If the request body is missing any of the required fields it responds with a status code 400.




// - [x] `[DELETE] /api/projects/:id`
//   - Returns no response body.
//   - If there is no project with the given `id` it responds with a status code 404.

// - [x] `[GET] /api/projects/:id/actions`
//   - Returns an array of actions (could be empty) belonging to a project with the given `id`.
//   - If there is no project with the given `id` it responds with a status code 404.
