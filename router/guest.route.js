const express = require("express")

//instance of router
const router = express.Router()

router.get('/login', (req, res, )=> {
    res.render('login')
})

router.get('/register', (req, res, )=> {
    res.render('register')
})

module.exports = router