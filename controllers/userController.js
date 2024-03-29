import User from '../models/User'

const UserController = {
    findAll: function(req,res) {
        User.find(req.query)
            .then(users => res.json(users))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        User.findById(req.params.id)
            .then(user => res.json(user))
            .then(err => res.status(422).json(err))
    },
    create: function(req,res) {
        User.create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.status(422).json(err))
    },
    update: function(req,res) {
        User.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        User.findById({_id: req.params.id})
            .then(user => user.remove())
            .then(allusers => res.json(allusers))
            .catch(err => res.status(422).json(err))
    }
}

export default UserController