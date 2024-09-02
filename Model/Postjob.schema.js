const { default: mongoose, mongo } = require("mongoose");
const { type } = require("os");

const PostjobSchema = mongoose.Schema({
    jobTitle: {
        type: String
    },
    jobDescription: {
        type: String
    },
    city: {
        type: String
    },
    lastDate: {
        type: String
    },
})

module.exports = mongoose.model("Postjob", PostjobSchema)