const express = require('express')
const cors    = require("cors")
const path    = require("path")
const router  = require("./router/guest.route.js")
const postRouter = require("./router/post.route.js")

const app = express()

app.set('views', path.join(__dirname, 'views')) // set path of our view files
app.set('view engine', 'ejs')                   // tell our server that we use ejs engine


app.use(express.static(path.join(__dirname, 'public'))); // register public files
app.use(router) //register routes
app.use(postRouter) //register routes


//start a server
app.listen(4000, ()=> {
    console.log("server started!")
})
