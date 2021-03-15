import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import bookRoute from './routes/bookRoute.js' 
import userRoute from './routes/userRoute.js'

// Error Middleware
import { notFound, errorHandler } from './Middleware/errorMiddleware.js'


dotenv.config()

// connecting DB
connectDB();



const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API runnning...")
})
app.use('/api/books', bookRoute)
app.use('/api/users',userRoute)

// Error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`App running on port ${PORT}`))