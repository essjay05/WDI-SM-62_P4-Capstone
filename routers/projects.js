// Require constants
const
    express = require('express'),
    projectsRouter = new express.Router(),
    projectsCtrl = require('../controllers/projects.js'),
    verifyToken = require('../serverAuth').verifyToken;

// Verify Token
// usersRouter.use(verifyToken);

// PROJECTS CRUD Routes
// Create project
projectsRouter.post('/', projectsCtrl.create);
// Index: Show all projects
projectsRouter.get('/', projectsCtrl.index);
// Show all projects
projectsRouter.get('/:proj_id', projectsCtrl.show);
// Update Project
projectsRouter.patch('/:proj_id', projectsCtrl.update);
// Delete Project
projectsRouter.delete('/:proj_id', projectsCtrl.destroy);

// Export module = 
module.exports = projectsRouter;