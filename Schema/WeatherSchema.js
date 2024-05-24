const mongoose  =require('mongoose')

const newSchema = mongoose.Schema({
    
    country_code:{
        type:String,
        required:true
    },
    city_name:{
        type:String,
        required:true
    },
    lat:{
        type:Number,
        required:true
    },
    lon:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model('weatherAppData',newSchema)