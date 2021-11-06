const router = require('express').Router(); // Set up router.

const Projects = require('./projects-model'); // Import projects model.



`[GET] /api/projects`
//   - Returns an array of projects as the body of the response.
//   - If there are no projects it responds with an empty array.



// THIS WORKS, connected to /api/projects/ 
// router.get('/', (req, res) => {
//     res.send('Projects router connected.');
// });


// [GET] api / projects
router.get('/', (req, res) => {
    Projects.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get projects.',
                err: err.message
            })
        })
})







// router.get('/', (req, res) => {
//     Projects.get()
//         .then(users => {
//             res.json(users);
//         })
//         .catch(err => {
//             res.send(err);
//         });
// });



// router.get('/projects/:id', (req, res) => {
//     Projects.get(req.params.id)
//         .then(user => {
//             if (user) {
//                 res.json(user);
//             } else {
//                 res.status(404).json({ message: 'user not found' });
//             }
//         })
//         .catch(error => console.log(error));
// });



module.exports = router // Export router.












// Write your "projects" router here!
// - [ ] `[GET] /api/projects`
//   - Returns an array of projects as the body of the response.
//   - If there are no projects it responds with an empty array.
// - [ ] `[GET] /api/projects/:id`
//   - Returns a project with the given `id` as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.
// - [ ] `[POST] /api/projects`
//   - Returns the newly created project as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.
// - [ ] `[PUT] /api/projects/:id`
//   - Returns the updated project as the body of the response.
//   - If there is no project with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.
// - [ ] `[DELETE] /api/projects/:id`
//   - Returns no response body.
//   - If there is no project with the given `id` it responds with a status code 404.
// - [ ] `[GET] /api/projects/:id/actions`
//   - Returns an array of actions (could be empty) belonging to a project with the given `id`.
//   - If there is no project with the given `id` it responds with a status code 404.
