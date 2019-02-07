// REQUIRE dotenv file
require('dotenv').config();

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    axios = require('axios'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/capstone',
    PORT = process.env.PORT || 3000;

// CONNECT TO MONGOOSE
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err || `Connected to mLab`)
})

// CONFIGURATIONS


// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));


// ROUTES
app.get('/api', (req, res) => {
    res.json({ message: "API ROOT" })
});
// Require usersRouter
const usersRouter = require('./routers/users.js');
app.use('/api/users', usersRouter);
// // Require resumesRouter
// const resumesRouter = require('./routers/resumes.js/index.js');
// app.use('/api/users/:id/resume');
// // Require projectsRouter
// const projectsRouter = require('./routers/projects.js');
// app.use('/api/users/:id/resumes/:id/projects')
// 404 error/route:
app.get("*", (req, res) => {
    res.sendStatus(404);
  });

// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Server listening on PORT ${PORT}`);
});