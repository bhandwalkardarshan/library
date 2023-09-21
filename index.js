const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const userRoutes = require("./routes/user.routes")
const bookRoutes = require("./routes/book.routes")
const orderRoutes = require("./routes/order.routes")

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", userRoutes)
app.use("/api/books", bookRoutes)
app.use("/api", orderRoutes)

app.get("/", (req,res)=> {
    res.status(201).json({message:"Welcome to Library Management System"})
})

app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is active at port: ${process.env.PORT}`)
})