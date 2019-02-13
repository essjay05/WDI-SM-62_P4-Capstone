// REQUIRE CONSTANTS
const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

// Project Schema (nested in Resume within User Schema)
const projectSchema = new mongoose.Schema ({
    title: { type: String },
    description: { type: String },
    techUsed: { type: String },
    deployedLink: { type: String },
    githubLink: { type: String },
    image: { type: String }
})

// User Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bannerImg: { type: String },
    profileImg: { type: String },
    title: { type: String },
    city: { type: String },
    state: { type: String},
    country: {type: String },
    skills: { type: String },
    aboutUser: { type: String },
    linkedIn: { type: String },
    github: { type: String },
    website: { type: String },
    projects: [projectSchema]
}, { timestamps: true })

// Generate/bcrypt password
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// Check valid password
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

// For User edit check and save new
userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this.generateHash(this.password)
    }
    next()
})

// Export User, Resume, and Projects Models
const 
    User = mongoose.model('User', userSchema),
    Project = mongoose.model('Project', projectSchema);

module.exports = User, Project;