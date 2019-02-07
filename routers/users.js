// Require constants
const
    express = require('express'),
    usersRouter = new express.Router(),
    usersCtrl = require('../controllers/users.js'),
    verifyToken = require('../serverAuth').verifyToken;

// Routes
// Index
usersRouter.get('/', usersCtrl.index);

// Create
usersRouter.post('/', usersCtrl.create);

// Authenticate
usersRouter.post('/authenticate', usersCtrl.authenticate);

// Verify Token
// usersRouter.use(verifyToken);
// PROTECTED Routes
// Show 1
usersRouter.get('/:id', usersCtrl.show);

// Edit/Update
usersRouter.patch('/:id', usersCtrl.update);

// Delete 
usersRouter.delete('/:id', usersCtrl.destroy);

// Export module
module.exports = usersRouter;
