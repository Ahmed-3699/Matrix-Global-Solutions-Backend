const express = require("express")
const { PostJob, GetJobs, EditJob, Deljob } = require("../Controllers/Postjob.controllers")

const routers = express.Router()
routers.post("/job-post", PostJob)
routers.get("/get-job", GetJobs)
routers.patch("/update-post-job/:id", EditJob)
routers.delete("/del-job/:id", Deljob)



module.exports = routers