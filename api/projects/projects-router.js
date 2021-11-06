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





// POST a new project.
// {
//     "id": 2,
//     "name": "Created with POST",
//     "description": "xxxxxx",
//     "completed": false
// }
router.post('/', (req, res, next) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})


// PUT an existing project.
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const changes = req.body;
    Projects.update(id, changes)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})


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