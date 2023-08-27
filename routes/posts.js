const express = require('express');

const postRouter = express.Router();

postRouter.get("/",(req,res)=>{
    res.send("posts");
})
postRouter.get("/new",(req,res)=>{
    res.send("new post");
})

module.exports = postRouter;