const mongoose = require('mongoose')
const url = process.env.DB
const connectDB = async()=>{
        try {
            const connection = await mongoose.connect(url)
            console.log('MongoDB DataBase connected sucessfully.....!')
            return connection
        } catch (error) {
            console.log(error)
        }
}

module.exports = connectDB