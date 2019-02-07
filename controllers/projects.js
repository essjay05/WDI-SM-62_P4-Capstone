// Require constants
const 
    User = require('../models/User'),
    Project = require('../models/User');

// Export controls:
module.exports = {
    // Create Project
    create: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            console.log(req.params.id)
            console.log('BREAK')
            console.log(res)
            if (err) return res.json({ success: false, err })
            // user.resume.projects.push(req.body)
            // user.save(err => {
            //     if (err) res.json({ success: false, err })
                res.json({ success: true, user})
            })
        // })
    },
    // Index all projects
    index: (req, res) => {
        User.findById(req.params.id, (err, user) => {
        
        })
    },
    // Show 1 project
    show: (req, res) => {
        Project.findById(req.params.id, (err, project) => {
            res.json({ success: true, project })
        })
    },
    // Update project
    update: (req, res) => {
        Project.findById(req.params.id, (err, updatedProject) => {
            Object.assign(updatedProject, req.body)
            updatedProject.save((err, updatedProject) => {
                if (err) res.json({ success: false, err })
                res.json({ success: true, updatedProject})
            })
        })
    },
    // Destroy project
    destroy: (req, res) => {
        Project.findByIdAndRemove(req.params.id, (err, deletedProject) => {
            if (err) res.json({ success: false, err })
            res.json({ success: true, deletedUser })
        })
    }
}