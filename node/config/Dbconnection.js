const mongoose = require('mongoose')
const connectDB =  async ()=>{
    try {

        const connect = await mongoose.connect(process.env.STRING)
        // console.log(connect);
        
        console.log("Database connected:",connect.connection.host,connect.connection.name)
    } catch (error) {
        console.log(error)
    }
}


module.exports =connectDB