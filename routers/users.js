// Require constants
const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users.js'),
    verifyToken = require('../serverAuth').verifyToken,
    resumeCtrl = require('../controllers/resume.js'),
    projectsCtrl = require('../controllers/projects.js');

// USERS CRUD Routes
// Non-protected Routes
    // Index
    usersRouter.get('/', usersCtrl.index);
    // Create
    usersRouter.post('/', usersCtrl.create);
    // Authenticate
    usersRouter.post('/authenticate', usersCtrl.authenticate);
    // Verify Token
    // usersRouter.use(verifyToken);
// PROTECTED USERS Routes
    // Show 1
    usersRouter.get('/:id', usersCtrl.show);
    // Edit/Update
    usersRouter.patch('/:id', usersCtrl.update);
    // Delete 
    usersRouter.delete('/:id', usersCtrl.destroy);

    // RESUME CRUD Routes
        // Create resume
        usersRouter.post('/:id/resume', resumeCtrl.create);
        // Show 1 resume (there should only be 1 resume/user...)
        usersRouter.get('/:id/resume/:resume_id', resumeCtrl.show);
        // Update resume
        usersRouter.patch('/:id/resume/:resume_id', resumeCtrl.update);
        // Delete resume
        usersRouter.delete('/:id/resume/:resume_id', resumeCtrl.destroy);

            // PROJECTS CRUD Routes
            // Create project
            usersRouter.post('/:id/resume/:id/projects', projectsCtrl.create);
            // Index: Show all projects
            usersRouter.get('/:id/resume/:id/projects', projectsCtrl.create);
            // Show all projects
            usersRouter.get('/:id/resume/:id/projects/:proj_id', projectsCtrl.show);
            // Update Project
            usersRouter.patch('/:id/resume/:id/projects/:proj_id', projectsCtrl.update);
            // Delete Project
            usersRouter.delete('/:id/resume/:id/projects/:proj_id', projectsCtrl.destroy);

// Export module
module.exports = usersRouter;
