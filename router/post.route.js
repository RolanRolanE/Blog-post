const express = require("express")

//instance of router
const router = express.Router()

router.get('/post-home', (req, res, )=> {
    res.render('user/post-home')
})

router.get('/post-view', (req, res, )=> {
    res.render('user/view-post')
})


module.exports = router

