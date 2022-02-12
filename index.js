const express = require('express') 
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
app.use(cors())
const PORT = process.env.PORT || 3000

app.use(express.json())


const productRoute = require('./routes/product')


mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(()=>console.log("DB Connected"))
    .catch((err)=>{console.log(err)
    })


app.use('/api/products', productRoute)


app.listen(process.env.PORT, ()=>{
    console.warn(`App is listening on http://localhost:${PORT}`)
})