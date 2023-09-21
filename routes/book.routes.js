const express = require("express")
const Book = require("../models/book.model")

const bookRoutes = express.Router()

// create
bookRoutes.post("/", async(req,res) => {
    try {
        const {title,author,category,price,quantity} = req.body
        const newBook = new Book({title,author,category,price,quantity})
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

// to get all books
/*
bookRoutes.get("/", async(req,res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})
*/

// to get books filtered by author and category
bookRoutes.get("/", async(req,res) => {
    try {
        const {author, category} = req.query
        const filter = {}

        if(author) filter.author = author
        if(category) filter.category = category
        
        const books = await Book.find(filter)
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

// to get particular book by id
bookRoutes.get("/:id", async(req,res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book){
            return res.status(404).json({message:"Book not found"})
        }
        res.status(200).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

// to update book by id
bookRoutes.put("/:id", async(req,res) => {
    try {
        const {title,author,category,price,quantity} = req.body
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,
            {title,author,category,price,quantity},
            {new:true})
        if(!updatedBook){
            return res.status(404).json({message:"Book not found"})
        }
 
        res.status(204).json({
            "message": "Book Updated Successfully"
          })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

// to delete book by id
bookRoutes.delete("/:id", async(req,res) => {
    try {
        
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if(!deletedBook){
            return res.status(404).json({message:"Book not found"})
        }
 
        res.status(202).json({message: "Book Deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

module.exports = bookRoutes