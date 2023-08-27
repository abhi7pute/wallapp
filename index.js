const express = require("express");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const app = express();

app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render("index")
})

app.use("/users",userRouter);
app.use("/posts",postRouter);

app.listen(5000,()=>{});