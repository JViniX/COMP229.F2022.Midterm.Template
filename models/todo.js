// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: Boolean        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);