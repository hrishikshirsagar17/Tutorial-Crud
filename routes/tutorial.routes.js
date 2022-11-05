module.exports = app => {
    const tutorials = require('../controllers/tutorial.controller.js');

    var router = require("express").Router();


    //Create and Save new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all Tutorial
    router.get("/", tutorials.findAll);

    // Find a single tutorial
    router.get("/:id", tutorials.findOne);

    //Update a Tutorial
    router.put("/:id", tutorials.update);

    //Delete a Tutorial
    router.delete("/:id", tutorials.delete);

    //Delete all tutorial
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};