// REQUIRE CONSTANTS
const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

// Project Schema (nested in Resume Schema)
const projectSchema = new mongoose.Schema ({
    title: { type: String },
    description: { type: String },
    techUsed: { type: String },
    deployedLink: { type: String },
    githubLink: { type: String }
})

// Resume Schema (nested in User Schema)
const resumeSchema = new mongoose.Schema({
    bannerImg: { type: String },
    profileImg: { type: String },
    title: { type: String },
    tagLine: { type: String },
    skills: [{ type: String }],
    aboutUser: { type: Text },
    linkedIn: { type: String },
    github: { type: String },
    website: { type: String },
    projects: [projectSchema]
}, { timestamps: true })

// User Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resume: [resumeSchema]
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

// Export User Model
const User = mongoose.model('User', userSchema)
module.exports = User;