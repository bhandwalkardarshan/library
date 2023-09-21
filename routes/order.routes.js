const express = require('express');
const authenticateMiddleware = require('../middlewares/authenticate'); // Assuming you have authentication middleware
const Order = require('../models/order.model');
const User = require('../models/user.model');
const Book = require('../models/book.model');

const orderRoutes = express.Router();

// Route for placing an order (protected route)
orderRoutes.post('/order', authenticateMiddleware, async (req, res) => {
  try {
    // Get the user ID from the authenticated token
    const userId = req.user.userId; // Assuming you store user ID in the token

    // Extract book IDs and quantities from the request body
    const { books,totalAmount } = req.body;

    // Validate that the books exist and have sufficient quantities
    // for (const { bookId } of books) {
    //   const book = await Book.findById(bookId);
    //   if (!book) {
    //     return res.status(400).json({ message: 'Invalid book selection or insufficient quantity' });
    //   }
    // }

    // Calculate the total amount for the order
    // let totalAmount = 0;
    // for (const { bookId, quantity } of books) {
    //   const book = await Book.findById(bookId);
    //   totalAmount += book.price * quantity;
    // }

    // Create a new order
    const newOrder = new Order({ user: userId, books, totalAmount });
    await newOrder.save();

    // Deduct the quantities of books from the inventory
    // for (const { bookId, quantity } of books) {
    //   await Book.findByIdAndUpdate(bookId, { $inc: { quantity: -quantity } });
    // }

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route for viewing all orders with user and book details (protected route for admin)
orderRoutes.get('/orders', authenticateMiddleware, async (req, res) => {
  try {
    // Check if the authenticated user is an admin (You need to implement this check)
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access forbidden: Not an admin' });
    }

    // Retrieve all orders with user and book details
    const orders = await Order.find()
      .populate('user', 'name email') // Populate user details (name and email)
      .populate({
        path: 'books.book',
        model: 'Book',
        select: 'title author price',
      }); // Populate book details (title, author, price)

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = orderRoutes;
