
const express = require("express") // import express
const { log } = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const PostRouter = require("./controllers/Posts") //import User Routes
const {createContext} = require("./middleware/middleware") 

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const { PORT = 3000 } = process.env

// Create Application Object
const app = express()

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(express.json()) // parse json bodies
app.use(createContext) // create req.context

// ROUTES AND ROUTES
app.get("/", (req, res) => {
    res.send("Backend server is running")
})

app.use("/posts", PostRouter)


// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))