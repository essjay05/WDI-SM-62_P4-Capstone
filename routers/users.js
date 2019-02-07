// Require constants
const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users.js'),
    verifyToken = require('../serverAuth').verifyToken;

// USERS CRUD Routes
// Non-protected Routes
    // Create
    usersRouter.post('/', usersCtrl.create);
    // Index
    usersRouter.get('/', usersCtrl.index);
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

// Export module
module.exports = usersRouter;
