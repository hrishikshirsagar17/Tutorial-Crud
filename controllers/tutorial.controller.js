const db = require("../models");
const Tutorial = db.tutorial;

//Create and Save new Tutorial
exports.create = (req, res) => {

    //Validate request
    if(!req.body.title){
        res.status(400).send({
            message: "Title can not be empty"
        })
        return;
    }

    //Create a tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published
    });

    //Save a tutorial
    tutorial.save(tutorial).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Retrieve all Tutorials
exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: {$regex: new RegExp(title), $options: "i"}} : {};

    Tutorial.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Find a single tutorial
exports.findOne = (req, res) => {

    const id = req.params.id;

    Tutorial.findById(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: "Tutorial not found"
            })
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

//Update a Tutorial
exports.update = (req, res) => {

    if(!req.body){
        return res.status(400).send({
            message: "Data is empty"
        });
    }

    const id = req.params.id;
    Tutorial.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                message: "Tutorial not found"
            })
        } else {
            res.send({
                message: "Tutorial Updated Successfully!!!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

//Delete a Tutorial
exports.delete = (req, res) => {

    const id = req.params.id;

    Tutorial.findByIdAndRemove(id)
    .then(data => {
        if(!data){
            res.status(404).send({
                message: "Tutorial not found"
            })
        } else {
            res.send({
                message: "Deleted Successfully!!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

//Delete all tutorial
exports.deleteAll = (req, res) => {

    Tutorial.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Tutorials deleted Successfully !`
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}