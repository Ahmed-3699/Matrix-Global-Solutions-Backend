const PostjobSchema = require("../Model/Postjob.schema");

const PostJob = async (req, res) => {
    // try {
        const response = await PostjobSchema.create(req.body);
        console.log(response, "response");
        // res.status(201).json(response);  // Respond with the created job
    // } catch (error) {
    //     console.error("Error creating job:", error);
    //     res.status(500).json({ error: "Internal server error" });
    // }
}

const GetJobs = async (req, res) => {
        const response = await PostjobSchema.find(req.body);
        console.log(response, "response");
        res.send(response);
}

const EditJob = async (req, res) => {
    var response = await PostjobSchema.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: req.body
        },
        { new: true }
    )
    res.send({ message: "itemEdit" })
}

const Deljob = async (req, res) => {
    console.log(req.params.id);
    var response = await PostjobSchema.findOneAndDelete({ _id: req.params.id })
    res.send({ response, message: "Item Deleted" })
}

module.exports = { PostJob, GetJobs, EditJob, Deljob }