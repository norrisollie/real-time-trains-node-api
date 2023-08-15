const express = require("express")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const PORT = process.env.PORT || 5050

const app = express()

// rate limiting
const limiter = rateLimit({
	windowMS: 10 * 60 * 1000, // in milliseconds
	max: 5,
})
// middleware to limit requests to url
app.use(limiter)
app.set("trust proxy", 1)

// enable cors
app.use(cors())

// Set static folder
app.use(express.static("public"))

// routes
app.use("/search", require("./routes/search/index"))
app.use("/service", require("./routes/service/index"))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
