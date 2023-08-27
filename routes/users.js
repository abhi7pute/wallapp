const express = require("express");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("USERS")
})

userRouter.get("/new", (req, res) => {
    res.send("users/new")
});

userRouter.get("/:id", (req, res)=>{
    res.send("users id is "  + req.params.id);
})

module.exports = userRouter;