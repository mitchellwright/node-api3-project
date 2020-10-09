require("dotenv").config();
const express = require("express");

const server = express();
const port = process.env.PORT;

// import routers
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

// log all the requests to the server
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
}

server.use(express.json());
server.use(logger);
server.use("/users", userRouter);
server.use("/posts", postRouter);

server.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
