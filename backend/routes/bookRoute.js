import express from 'express'
const router = express.Router()
import Book from '../models/bookModel.js'

router.get('/', async (req, res) => { 
    try{
        const books = await Book.find({})
        res.status(200).json(books)
    }
    catch(err){
        console.log("ERROR",err)
    }
})
router.get('/:id',async (req, res) => {
    const book = await Book.findById(req.params.id)
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({ message: 'Book not Find'})
    }
})

export default router;