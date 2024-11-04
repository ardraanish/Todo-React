const mongoose = require('mongoose')

const taskSchema =new mongoose.Schema({
    title:String,
    description:String,
    status:{type:String, enum:['pending','complete','on-progress']}
})

module.exports = mongoose.model("todos",taskSchema)