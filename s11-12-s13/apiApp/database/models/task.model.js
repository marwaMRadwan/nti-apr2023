const mongoose = require("mongoose")
const taskModel = mongoose.model("Task", {
    // => taskType, title, content, file
    // add , edit, del one, del all , show all, show single

})
module.exports = taskModel