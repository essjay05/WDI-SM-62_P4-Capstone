// Require constants
const 
    User = require('../models/User'),
    Resume = require('../models/User');


// Export controls:
module.exports = {
    // Create Resume
    create: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.json({ success: false, err })
            user.resume.push(req.body)
            user.save(err => {
                if (err) console.log(err)
                res.json({ success: true, user })
            })
        })
    },
    // Show Resume
    show: (req, res) => {
        let { user_id, resume_id } = req.params
        Resume.find({ resume:})
    }
}