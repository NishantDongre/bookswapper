import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import bookRoute from './routes/bookRoute.js' 


dotenv.config()

// connecting DB
connectDB();


const app = express();

app.get('/', (req, res) => {
    res.send("API runnning...")
})
app.use('/api/books',bookRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`App running on port ${PORT}`))