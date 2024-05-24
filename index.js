const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
app.use(cors())
app.use(express.json())
const PORT = 4500;
const schema = require('./Schema/WeatherSchema')
const connectDB = require('./Database/configueDB')

// get data
app.get('/',(req,res)=>{
    res.send('Server running on port'+ PORT)
})

// post weather data
app.post('/data',async(req,res)=>{
    let data = req.body
    try {
        const mydata =  new schema({...req.body})
        await mydata.save()
        res.send('Data saved')
      } catch (err) {
        console.log(err)
      }
})

//get weather data

app.get('/get',async(req,res)=>{
    try {
        let data = await schema.find()
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

//Connected to the dataBase online
connectDB()


//Creating and running sever in the port
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('server running in port ',PORT)
})
